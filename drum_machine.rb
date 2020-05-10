
use_osc "localhost",4560
use_debug false
set :bpm, 60

live_loop :getdata do
  use_real_time
  input_data = sync "/osc*/instrument/**"
  input_inst = parse_sync_address "/osc*/instrument/**"
  set :current_action, input_inst.slice(2, 1)[0]
  set :instrument_name, input_inst.slice(3, 1)[0]
  inst= get(:instrument_name)
  if get(:current_action) == "set_bpm"
    set :bpm, input_data[0]
  end
  bpm_loop
  if get(:current_action)=="add_instrument"
    defLoop inst
  end
  if get(:current_action) == "remove_instrument"
    set ((inst+"k").to_sym),1
  end
  if get(:current_action) == "set_beats"
    set ((inst+"beats").to_sym), input_data
  end
  if get(:current_action) == "set_volume"
    set ((inst+"volume").to_sym), map_volume(input_data[0])
  end
  if get(:current_action) == "set_pan"
    set ((inst+"pan").to_sym), map_pan(input_data[0])
  end
  if get(:current_action) == "set_reverb"
    set ((inst+"reverb").to_sym), map_reverb(input_data[0])
  end
end


define :defLoop do |name| #function to define and start live loop
  live_loop  ("ll"+name).to_sym, sync: :bpm_loop do
    
    with_fx :reverb, room: (get((name+"reverb").to_sym) or 0) do
      puts get(:bpm)
      use_bpm get(:bpm)
      16.times do |i|
        if get((name+"beats").to_sym) and beat_to_str(get((name+"beats").to_sym))[i] == "x"
          sample name.to_sym,  amp: (get((name+"volume").to_sym) or 1), pan: get((name+"pan").to_sym)
        end
        sleep 0.25
        #stop section for loop
        if get((name+"k").to_sym)==1
          set ((name+"k").to_sym),0
          set ((name+"beats").to_sym),[]
          stop
        end
      end
    end
  end
end

define :bpm_loop do #function to define and start live loop
  live_loop :bpm_loop do
    use_bpm get(:bpm)
    16.times do |i|
      to_send = i == 0 ? 1 : 2
      osc_send "127.0.0.1", 5000, "/bpm", [to_send, 60*2.0/(get(:bpm))] if i== 0 or i==8
      sleep 0.25
    end
  end
end


define :beat_to_str do |beat|
  beat.map { |n| n == 1 ? "x" : "." }.join('')
end

define :parse_sync_address do |address|
  v= get_event(address).to_s.split(",")[6]
  if v != nil
    return v[3..-2].split("/")
  else
    return ["error"]
  end
end

define :map_pan do |value|
  if value == 50
    return 0
  elsif value < 50
    print -1 * (1 - value / 50.0)
    return -1 * (1 - value / 50.0)
  end
  return value / 50.0 -1
end


define :map_volume do |value|
  if value == 1
    return 0
  end
  print value
  return value * 5 / 100
end

define :map_reverb do |value|
  if value == 1
    return 0
  end
  print value
  return value / 100.0
end
use_osc "localhost",4560
use_debug false
bpm = 60

live_loop :getdata do
  use_real_time
  input_beats = sync "/osc*/instrument/**"
  input_inst = parse_sync_address "/osc*/instrument/**"
  set :current_action, input_inst.slice(2, 1)[0]
  set :instrument_name, input_inst.slice(3, 1)[0]
  inst= get(:instrument_name)
  if get(:current_action)=="add_instrument"
    defLoop inst
  end
  if get(:current_action) == "remove_instrument"
    set ((inst+"k").to_sym),1
  end
  if get(:current_action) == "set_beats"
    set ((inst+"beats").to_sym), input_beats
  end
end

live_loop :_1_bar do
  use_bpm bpm
  use_synth :beep
  play :as5, release: 0.5
  sleep 4
end

live_loop :send_bpm, sync: :_1_bar do
  use_bpm bpm
  16.times do |i|
    to_send = i == 0 ? 1 : 2
    osc_send "127.0.0.1", 5000, "/bpm", [to_send, 60*2.0/60] if i== 0 or i==8
    sleep 0.25
  end
end


define :defLoop do |name| #function to define and start live loop
  live_loop  ("ll"+name).to_sym, sync: :_1_bar do
    use_bpm bpm
    16.times do |i|
      sample name.to_sym if get((name+"beats").to_sym) and beat_to_str(get((name+"beats").to_sym))[i] == "x"
      sleep 0.25
      #stop section for loop
      if get((name+"k").to_sym)==1
        set ((name+"k").to_sym),0
        stop
      end
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
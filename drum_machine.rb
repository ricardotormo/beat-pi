#sample osc messages now sent to test this
use_osc "localhost",4560
osc "/instruments/:drum_bass_soft/:drum_cymbal_closed/:drum_snare_hard/:bd_haus/:drum_cowbell/:drum_splash_hard"

beats_per_bar = 4
bpm_default = 60

live_loop :get_instruments do
  use_real_time
  sync "/osc*/instruments/**"
  instruments = parse_sync_address "/osc*/instruments/**"
  set :instruments, instruments.slice(2, instruments.length)
  bpm = sync "/osc*/bpm"
  set :bpm, bpm[0]
end

live_loop :get_bpm do
  use_real_time
  res = sync "/osc*/bpm"
  set :bpm, res[0]
end


in_thread do
  if get[:instruments] and get[:bpm]
    live_loop :_1_bar do
      use_bpm get[:bpm] or bpm_default
      use_synth :beep
      #play :as5, release: 0.5
      sleep beats_per_bar
    end
    
    live_loop :send_osc, sync: :_1_bar do
      use_bpm get[:bpm]
      16.times do |i|
        to_send = i == 0 ? 1 : 2
        osc_send "127.0.0.1", 5000, "/bpm", [to_send, 60*2.0/get[:bpm]] if i== 0 or i==8
        sleep 0.25
      end
    end
    get[:instruments].each_with_index do |x, i|
      live_loop "get-#{x}" do
        use_real_time
        res = sync "/osc*/#{x.delete_prefix(":")}"
        set eval(x), beat_to_str(res)
      end
      
      live_loop ":play_#{x}", sync: :_1_bar do
        use_bpm get[:bpm]
        16.times do |i|
          sample eval(x), amp: 0.8 if get[eval(x)] and get[eval(x)][i] == "x"
          sleep 0.25
        end
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
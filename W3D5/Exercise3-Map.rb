class Map
    def initialize
        @map = []
    end

    def set(key, value)
        if !@map.include?(key)
            @map << [key, value]
        end

        (0...@map.length).each do |i|
            if @map[i].include?(key)
                @map[i][-1] = value
            end
        end

        @map
    end

    def get(key)
        @map.each {|pair| return pair[0] if pair[0] == key}
        nil
    end

    def delete(key)
        value = get(key)
        @map.reject! {|pair| pair[0] == key}
    end

    def show
        

    end



end
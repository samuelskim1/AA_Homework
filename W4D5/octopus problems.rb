#sluggish octopus

def sluggish_octopus(fishes)
    fishes.each_with_index do |fish1, i1|
        fishes.each_with_index do |fish2, i2|
            #have to find a way to hold the max length
            #dont think that inject works here to get O(n^2)

        end


        return fish1
    end

end

class Array

    def merge_sort(&prc)
        prc ||= Proc.new {|x, y| x <=> y}

        return self if count <= 1

        midpoint = count/2
        sorted_left = self.take(midpoint).merge_sort(&prc)
        sorted_right = self.drop(midpoint).merge_sort(&prc)

        Array.merge(sorted_left, sorted_right, & prc)

    end

    private
    def self.merge(left, right, &prc)
        merged = []

        until left.empty? || right.empty?
            case prc.call(left.first, right.first)
            when -1
                merged << left.shift
            when 0
                merged << left.shift
            when 1
                merged << right.shift
            end
        end
        

        merged + left + right
    end
end
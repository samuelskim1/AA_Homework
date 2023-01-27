class Queue
    def initialize
        @queue = []
    end

    def enqueue(el)
        @queue.push(el)
    end

    def dequeue
        @queue.pop
        return @queue
    end

    def peek
        @queue[-1]
    end
end
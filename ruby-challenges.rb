# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

    # pseudocode attempted with wrong logic and had to change to below similar to search bar example in notes:
        # create method that takes in beverages_array and utilizing .select to search and find elements in the array that contain given letter_o and letter_t and include string in array if it contains that letter.  
            # .map did help to see if it was true or false and I could tell it was not seeing a word correctly depending on the order of letter o or t due to the array being mutated, I think.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

 puts beverages_array.select {|string| string.include? 't' }

 puts beverages_array.select {|string| string.include? 'o'}

# these attempts did not work due to be mutators of the original array.
    # p beverages_array.map
    # puts beverages_array.keep_if {|string| string.include? 't' }

    # puts beverages_array.keep_if {|string| string.include? 'o'}
# beverages_array.keep_if do |string|
#         p string.keep_if? 'o'
#    &&
#         p string.keep_if? 't'
# end

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

     # pseudocode utilizing HINT,(btw ty), start with .values which removes the keys and only returns the values, then take values and .flatten it by 3 one for each multi-diemensional array, then .sort order of .values.flattened list by aphabet and return new alphabatized array. not sure why its so easy I spent more time trying to create others methods that did not work and I just had to stack ("stack" - not to be confused with Ruby data structures) the built-in methods. Also I found I did not know how to use the bang mutator, I tried .flatten! but it never worked, only .flatten. 

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 


puts us_states.values.flatten.sort

# These attempts below did not work.
# def only_val = () 
#     us_states.values;
# end
# puts only_val
# puts us_states.flatten(3)
# puts us_states.sort

# def no_key()
#     us_states.values
# end
# p no_key --> `no_key': undefined local variable or method `us_states' for main:Object (NameError)

# def pancake(hash)
#     us_states.flatten
# end
# p pancake
# def sort_pan(array)
#     pancake.sort
# end

# p sort_pan

# def pancake us_states; 
#     us_states.flatten = new
#    p new
# end
# p pancake

#  puts us_states.flatten.sort!
#     # p us_states.flatten(A..Z)
# def pancake_order  us_states
#     p us_states.flatten  
# end
   
# def pancake us_states.flatten
#  sort_by {|value| 'A'..'Z'}
# end
# print pancake
# puts us_states.flatten


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

 # pseudocode utilizing Ruby Inheritance take the given class name, values (model, wheels, and current_speed) and parameters (the initial amount of wheels and current_speed) to initialize a parent super class called Bike.  That class will initialize child or sub classes so that all sub classes will inherit the initialized values
#  *** I was able to build the class correctly I thought even added Trek class. However the increment and decrement kicked my butt.  I can get it to go up and down in speed by 1 only.  I could not get the argument of a higher number to work.  The brakes wont go passed 0 at least. 

class Bike
    def initialize(model, wheels, current_speed)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed}mph."
    end
    def pedal_faster()
        @current_speed += 1
    end
    def brake() 
        if @current_speed <= 0
           @current_speed = 0
        else
           @current_speed -= 1
        end
    end
end



my_bike = Bike.new('Trek', '2', '0')
# my_bike.pedal_faster(10)
# my_bike.pedal_faster(18)
# my_bike.brake(5)
# my_bike.brake(25)
 my_bike.pedal_faster
 my_bike.pedal_faster
 my_bike.pedal_faster
 my_bike.pedal_faster
 my_bike.pedal_faster
 my_bike.pedal_faster
 my_bike.brake
 my_bike.brake
 my_bike.brake
 my_bike.brake
 my_bike.brake
 my_bike.brake
 my_bike.brake
 my_bike.brake
 my_bike.brake
p my_bike.bike_info







# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
# Please see above for 3b.  I could only get it to increment and decrement by 1, however it would not go below zero. 
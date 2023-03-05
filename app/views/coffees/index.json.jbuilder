@coffees.each do |coffee|
    json.set! coffee.id do 
        json.extract! coffee, :name, :year, :caffine_content, :caffine_percentage
    end
end
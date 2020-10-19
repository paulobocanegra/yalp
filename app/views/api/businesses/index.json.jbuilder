@businesses.each do |business|
    json.set! business.id do
        json.extract! business, :id, :name, :bio, :rating   
    end
end
@posts.each do |post|
    json.set! post.id do
        json.extract! post, :title, :caffee_id, :text, :rating
    end
end


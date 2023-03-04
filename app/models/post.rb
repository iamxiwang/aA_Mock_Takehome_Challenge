# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  coffee_id  :bigint           not null
#  text       :text             not null
#  rating     :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    
    belongs_to:coffee,
        foreign_key: :coffee_id,
        class_name: :Coffee
end

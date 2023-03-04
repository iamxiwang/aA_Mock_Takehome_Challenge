# == Schema Information
#
# Table name: coffees
#
#  id                 :bigint           not null, primary key
#  name               :string           not null
#  year               :integer          not null
#  caffine_content    :float            not null
#  caffine_percentage :float            not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Coffee < ApplicationRecord
    validates :year, :caffine_content, :caffine_percentage, presence: true
    validates :name, presence: true, uniqueness: true
    has_many :posts,
        class_name: :Post,
        foreign_key: :coffee_id
end

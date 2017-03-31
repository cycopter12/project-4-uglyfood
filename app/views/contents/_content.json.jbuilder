json.extract! content, :id, :project_type, :body, :image, :accepted, :created_at, :updated_at
json.url content_url(content, format: :json)

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170329065939) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "orders", force: :cascade do |t|
    t.integer  "outlet_produce_id"
    t.integer  "user_id"
    t.integer  "quantity_bought"
    t.date     "purchase_date"
    t.decimal  "cost"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["outlet_produce_id"], name: "index_orders_on_outlet_produce_id", using: :btree
    t.index ["user_id"], name: "index_orders_on_user_id", using: :btree
  end

  create_table "outlet_produces", force: :cascade do |t|
    t.integer  "outlet_id"
    t.integer  "produce_id"
    t.integer  "quantity"
    t.date     "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["outlet_id"], name: "index_outlet_produces_on_outlet_id", using: :btree
    t.index ["produce_id"], name: "index_outlet_produces_on_produce_id", using: :btree
  end

  create_table "outlets", force: :cascade do |t|
    t.string   "street_address"
    t.integer  "postal_code"
    t.integer  "supermarket_id"
    t.string   "branch"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.string   "name"
    t.index ["supermarket_id"], name: "index_outlets_on_supermarket_id", using: :btree
  end

  create_table "produces", force: :cascade do |t|
    t.string   "name"
    t.integer  "type_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["type_id"], name: "index_produces_on_type_id", using: :btree
  end

  create_table "supermarkets", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "types", force: :cascade do |t|
    t.string   "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "",    null: false
    t.integer  "outlet_id"
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.string   "organization_name"
    t.string   "street_name"
    t.integer  "postal_code"
    t.integer  "contact_number"
    t.boolean  "is_admin",               default: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["outlet_id"], name: "index_users_on_outlet_id", using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "orders", "outlet_produces"
  add_foreign_key "orders", "users"
  add_foreign_key "outlet_produces", "outlets"
  add_foreign_key "outlet_produces", "produces"
  add_foreign_key "outlets", "supermarkets"
  add_foreign_key "produces", "types"
  add_foreign_key "users", "outlets"
end

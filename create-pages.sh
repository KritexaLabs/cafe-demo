#!/bin/bash
STORE="megan-restaurant-theme.myshopify.com"

run_mutation() {
  local title="$1"
  local handle="$2"
  local suffix="$3"
  echo "→ Creating: $title"
  shopify store execute \
    --store "$STORE" \
    --allow-mutations \
    --query "mutation { pageCreate(page: { title: \"$title\", handle: \"$handle\", templateSuffix: \"$suffix\", isPublished: true, body: \"\" }) { page { id title handle } userErrors { field message } } }" 2>&1 | grep -E "title|handle|message|error" | head -5
  sleep 0.5
}

run_mutation "About"          "about"          "about"
run_mutation "Menu"           "menu"           "menu"
run_mutation "Banquets"       "banquets"       "banquets"
run_mutation "Catering"       "catering"       "catering"
run_mutation "Gallery"        "gallery"        "gallery"
run_mutation "Reservation"    "reservation"    "reservation"
run_mutation "Visiting Hours" "visiting-hours" "visiting-hours"
run_mutation "Menu Kit"       "menu-kit"       "menu-kit"

echo ""
echo "✅ Done! All pages created."

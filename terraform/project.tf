resource "digitalocean_project" "nullsheen" {
  name        = "nullsheen"
  description = "nullsheen.com project"
  purpose     = "Web Application"
  environment = "Production"
  resources   = [
  digitalocean_app.weapon-designer.urn,
  digitalocean_domain.nullsheen.urn
  ]
}
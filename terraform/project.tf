resource "digitalocean_project_resources" "nullsheen" {
  project = data.terraform_remote_state.matrix.outputs.project_id
  resources = [
    digitalocean_app.weapon-gen.urn
    ]
}
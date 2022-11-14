data "terraform_remote_state" "matrix" {
  backend = "remote"
  config = {
    organization = "ravegrunt"
    workspaces = {
      name = "sr3-matrix-gen"
    }
  }
}
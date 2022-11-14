resource "digitalocean_app" "weapon-gen" {
  spec {
    name   = "weapon-designer"
    region = "nyc"
    domain {
      name = "weapon-designer.nullsheen.com"
      type = "PRIMARY"
      zone = "nullsheen.com"
    }

    static_site {
      name          = "weapon-designer-sr3"
      build_command = "npm run build"
      output_dir    = "/build"

      git {
        repo_clone_url = "https://github.com/criticalfault/sr3-weapon-designer.git"
        branch         = "main"
      }
    }
  }
}
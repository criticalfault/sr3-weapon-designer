terraform {
  required_version = "~> 1.3"
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
  cloud {
    organization = "ravegrunt"
    workspaces {
      name = "sr3-weapon-designer"
    }
  }
}

provider "digitalocean" {
  token = var.SR3-DO
}
# Variables
IMAGE_NAME := retro-synth
TAG := latest
PORT := 3000
# REGISTRY := your-username # Set this when running make push, e.g., make push REGISTRY=myuser

.PHONY: help build run push stop clean

# Default target
help:
	@echo "Retro 8-Bit Synth Makefile"
	@echo "========================="
	@echo "Available commands:"
	@echo "  make build                 - Build the Docker image"
	@echo "  make run                   - Run the container locally on port $(PORT)"
	@echo "  make push REGISTRY=user    - Tag and push the image to a registry"
	@echo "  make stop                  - Stop the running container"
	@echo "  make clean                 - Remove the local docker image"

build:
	@echo "Building Docker image $(IMAGE_NAME):$(TAG)..."
	docker build -t $(IMAGE_NAME):$(TAG) .

run:
	@echo "Starting container..."
	@echo "App will be available at http://localhost:$(PORT)"
	docker run -p $(PORT):3000 --name $(IMAGE_NAME) --rm $(IMAGE_NAME):$(TAG)

push:
	@if [ -z "$(REGISTRY)" ]; then \
		echo "Error: REGISTRY variable is not set."; \
		echo "Usage: make push REGISTRY=your-dockerhub-username"; \
		exit 1; \
	fi
	@echo "Tagging and pushing image to $(REGISTRY)/$(IMAGE_NAME):$(TAG)..."
	docker tag $(IMAGE_NAME):$(TAG) $(REGISTRY)/$(IMAGE_NAME):$(TAG)
	docker push $(REGISTRY)/$(IMAGE_NAME):$(TAG)

stop:
	@echo "Stopping container $(IMAGE_NAME)..."
	-docker stop $(IMAGE_NAME)

clean:
	@echo "Removing image $(IMAGE_NAME):$(TAG)..."
	-docker rmi $(IMAGE_NAME):$(TAG)

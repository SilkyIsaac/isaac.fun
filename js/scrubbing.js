class ScrubVideo {
  constructor(section) {
    this.section = section;
    this.canvas = section.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.figcaption = section.querySelector('figcaption'); // select the figcaption

    this.folder = section.dataset.folder;
    this.totalImages = parseInt(section.dataset.frames, 10);

    this.images = [];
    this.currentFrameIndex = 0;
    this.loadedImages = 0;

    this.maxOpacity = 1; // maximum opacity for figcaption

    this.loadImages();
    this.addResizeListener();
  }

  loadImages() {
    for (let i = 1; i <= this.totalImages; i++) {
      const img = new Image();
      img.src = `${this.folder}${i}.png`;
      img.onload = () => {
        this.loadedImages++;
        if (this.loadedImages === this.totalImages) {
          this.addScrollListener();
          this.render();
        }
      };
      this.images.push(img);
    }
  }

  addScrollListener() {
    window.addEventListener('scroll', () => this.onScroll());
  }

  addResizeListener() {
    window.addEventListener('resize', () => this.resizeCanvas());
    this.resizeCanvas();
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.render();
  }

  onScroll() {
    const rect = this.section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollProgress = Math.min(
      Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
      1
    );

    const frameIndex = Math.floor(scrollProgress * (this.totalImages - 1));
    this.currentFrameIndex = frameIndex;

    const brightness = Math.min(100, scrollProgress * 80);
    this.canvas.style.filter = `brightness(${brightness}%)`;

    if (this.figcaption) {
      this.figcaption.style.opacity = Math.min(this.maxOpacity, scrollProgress * 1);
    }

    this.render();
  }

  render() {
    if (!this.images[this.currentFrameIndex]) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.images[this.currentFrameIndex], 0, 0, this.canvas.width, this.canvas.height);
  }
}

window.addEventListener('load', () => {
  document.querySelectorAll('.scrub-section').forEach(section => {
    new ScrubVideo(section);
  });
});


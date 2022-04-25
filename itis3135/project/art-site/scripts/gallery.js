$(document).ready(function () {
  /**
   *  <div class="col-md-4 gallery-column">
                    <div class="button">
                        <a href="images/kirbysleep.jpg">
                            <img src="images/kirbysleep.jpg" alt="image1" class="img-fluid">
                        </a>
                    </div>
                </div>
                <div class="col-md-4 gallery-column">
                    <div class="button">
                        <a href="images/Marz_vs_kirby.jpg">
                            <img src="images/Marz_vs_kirby.jpg" alt="image2" class="img-fluid">
                        </a>
                    </div>
                </div>

                <div class="col-md-4 gallery-column">
                    <div class="button">
                        <a href="images/Ocean.jpg">
                            <img src="images/Ocean.jpg" alt="image3" class="img-fluid">
                        </a>
                    </div>
                </div>
            </div>
            <div class="row gallery-row">
                <div class="col-md-4 gallery-column">
                    <div class="button">
                        <a href="images/Emma.jpg">
                            <img src="images/Emma.jpg" alt="image4" class="img-fluid" loading="lazy">
                        </a>
                    </div>
                </div>
                <div class="col-md-4 gallery-column">
                    <div class="button">
                        <a href="images/Noodle.jpg">
                            <img src="images/Noodle.jpg" alt="image5" class="img-fluid" loading="lazy">
                        </a>
                    </div>
                </div>
                <div class="col-md-4 gallery-column">
                    <div class="button">
                        <a href="images/scientist.jpg">
                            <img src="images/scientist.jpg" alt="image6" class="img-fluid" loading="lazy">
                        </a>
                    </div>
                </div>
            </div>
            <div class="row gallery-row">
                <div class="col-md-4 gallery-column">
                    <div class="button">
                        <a href="images/skykid.jpg">
                            <img src="images/skykid.jpg" alt="image7" class="img-fluid" loading="lazy">
                        </a>
                    </div>
                </div>
                <div class="col-md-4 gallery-column">
                    <div class="button">
                        <a href="images/Starry_night.jpg">
                            <img src="images/Starry_night.jpg" alt="image8" class="img-fluid" loading="lazy">
                        </a>
                    </div>
                </div>
                <div class="col-md-4 gallery-column">
                    <div class="button">
                        <a href="images/water.jpg">
                            <img src="images/water.jpg" alt="image9" class="img-fluid" loading="lazy">
                        </a>
                    </div>
                </div>
            </div>
            <div class="row gallery-row">
                <div class="col-md-4 gallery-column">
                    <div class="button">
                        <a href="images/46845764.jpg">
                            <img src="images/46845764.jpg" alt="image10" class="img-fluid"> loading="lazy"
                        </a>
                    </div>
                </div>
                <div class="col-md-4 gallery-column">
                    <div class="button">
                        <a href="images/sky.jpg">
                            <img src="images/sky.jpg" alt="image11" class="img-fluid" loading="lazy">
                        </a>
                    </div>
                </div>
   */
  $("#nanogallery2").nanogallery2({
    //use imgs from the html template above
    galleryDisplayMode: "pagination",
    thumbnailHieight: "auto", thumbnailWidth: "300",
    gallerySorting: 'random',

    thumbnailBaseGridHeight: 50,
    thumbnailL1GutterWidth: 4,
    thumbnailL1GutterHeight: 4,
    thumbnailBorderHorizontal: 5,
    thumbnailBorderVertical: 5,

    thumbnailAlignment: 'fullWidth',
    thumbnailDisplayTransition: 'slideDown',

    thumbnailDisplayTransitionDuration: 500,
    thumbnailDisplayInterval: 200,
    thumbnailHoverEffect2: 'imageScaleIn80', 
    touchAnimation: true,
    touchAutoOpenDelay: -1,

    locationHash: false,

    itemsBaseURL: "images/",
    items: [
      { src: "kirbysleep.jpg", srct: "kirbysleep.jpg", title: "Kirby Sleep" },
      { src: "Marz_vs_kirby.jpg", srct: "Marz_vs_kirby.jpg", title: "Marz vs Kirby" },
      { src: "Ocean.jpg", srct: "Ocean.jpg", title: "Ocean" },
      { src: "Emma.jpg", srct: "Emma.jpg", title: "Emma" },
      { src: "Noodle.jpg", srct: "Noodle.jpg", title: "Noodle" },
      { src: "scientist.jpg", srct: "scientist.jpg", title: "Scientist" },
      { src: "skykid.jpg", srct: "skykid.jpg", title: "Sky Kid" },
      { src: "Starry_night.jpg", srct: "Starry_night.jpg", title: "Starry Night" },
      { src: "water.jpg", srct: "water.jpg", title: "Water" },
      { src: "46845764.jpg", srct: "46845764.jpg", title: "luminescent" },
      { src: "sky.jpg", srct: "sky.jpg", title: "Sky" },
      { src: "niko.jpg", srct: "niko.jpg", title: "Niko" },
      { src: "sapphire.jpg", srct: "sapphire.jpg", title: "Sapphire" },
      { src: "kirby_vs_zero.jpg", srct: "kirby_vs_zero.jpg", title: "Kirby vs Zero" }

    ]
  });
});
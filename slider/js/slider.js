function Slider() {
  this.imagesUrls =  [];
  this.currentImageIndex = 0;
  this.showPrevBtn = null;
  this.showNextBtn = null;
  this.slideImage = null;

  this.start = function (elId) {
    var that = this;

    var elSelector = '#' + elId;
    var el = document.querySelector(elSelector);

    this.showPrevBtn = el.querySelector('.show-prev-btn');
    this.showNextBtn = el.querySelector('.show-next-btn');
    this.slideImage = el.querySelector('.slide-img');

    // subscribe to events
    this.showPrevBtn.addEventListener('click', function (e) {
      that.onShowPrevBtnClick(e);
    });

    this.showNextBtn.addEventListener('click', function (e) {
      that.onShowNextBtnClick(e);
    });

    // create images array
    this.imagesUrls.push('https://i.pinimg.com/236x/bb/03/d8/bb03d878526eb2f3fb3a084d8c2a4f3e--wallpaper-hd-for-desktop-background-hd-wallpaper.jpg?nii=t');
    this.imagesUrls.push('https://sun6-22.userapi.com/s/v1/ig2/u2YlTtKWlPxSRAiHSS46a92giquAhMxLVJ2qPEKsn8PQbNwB1qJhmNRHHWnpaz9bKB6pl91JkINT47QURnwOPLAM.jpg?size=200x200&quality=96&crop=5,439,1075,1075&ava=1');
    this.imagesUrls.push('https://sun9-68.userapi.com/impg/c857236/v857236093/18a5bb/_u6Ula6aiLw.jpg?size=200x200&quality=96&sign=0878a778aff60ae69bf75f00d3b483e0&type=album');
    this.imagesUrls.push('https://yt3.ggpht.com/ytc/AAUvwnj63wU7kFnNSR4q8EBGCHTZUt670cA5uDdy4Yk_ug=s900-c-k-c0x00ffffff-no-rj');

    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showPrevBtn.disabled = true;
  };

  this.onShowPrevBtnClick = function (e) {
    this.currentImageIndex--;
    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showNextBtn.disabled = false;

    // dissabled prev button if need
    if (this.currentImageIndex === 0) {
      this.showPrevBtn.disabled = true;
    }
  };

  this. onShowNextBtnClick = function (e) {
    this.currentImageIndex++;
    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showPrevBtn.disabled = false;

    // dissabled next button if need
    if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
      this.showNextBtn.disabled = true;
    }
  };
}
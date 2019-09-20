'use strict';

(function () {
  var introSliderElement = document.querySelector('.intro__slider');

  var Slider = function (slider) {
    this.slider = slider;
    this.items = this.slider.querySelectorAll('.slider__item');
    this.mainSlide = this.slider.querySelector('.slider__item--main');
    this.secondarySlide = this.slider.querySelector('.slider__item--secondary');
    this.controls = {
      prev: this.slider.querySelector('.slider__control--prev'),
      next: this.slider.querySelector('.slider__control--next')
    }
    this.control = '';

    this.changeSlide = function (direction) {
      var activeSlide = this.mainSlide;
      var inactiveSlide = this.secondarySlide;

      activeSlide.classList.remove('slider__item--main');

      if (this.control) {
        activeSlide.classList.remove('slider__item--' + this.control);
      }

      activeSlide.classList.add('slider__item--secondary', 'slider__item--' + direction);
      inactiveSlide.classList.remove('slider__item--secondary');

      if (this.control) {
        inactiveSlide.classList.remove('slider__item--' + this.control);
      }
      inactiveSlide.classList.add('slider__item--main', 'slider__item--' + direction);

      this.control = direction;

      this.mainSlide = inactiveSlide;
      this.secondarySlide = activeSlide;
    }

    this.onBtnClick = function (evt) {
      var direction;

      switch (evt.currentTarget) {
        case this.controls.prev:
          direction = 'prev';
          break;
        case this.controls.next:
          direction = 'next';
          break;
      }

      this.changeSlide(direction);
    }

    this.addListeners = function () {
      this.controls.prev.addEventListener('click', this.onBtnClick.bind(this));
      this.controls.next.addEventListener('click', this.onBtnClick.bind(this));
    }

    this.init = function () {
      this.addListeners();
    }
  };

  var introSlider = new Slider(introSliderElement);
  introSlider.init();
})();

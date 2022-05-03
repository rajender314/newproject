import { Component, OnInit } from '@angular/core';
// import { Lightbox } from 'ngx-lightbox';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';

@Component({
  selector: 'app-jquery-demo1',
  templateUrl: './jquery-demo1.component.html',
  styleUrls: ['./jquery-demo1.component.scss']
})
export class JqueryDemo1Component implements OnInit {
  private _albums = [];
  imgArray: GalleryItem[];
  public showTrans = false;

  selectedValue: string;
  foods = [
    {id: 1, viewValue: 'Steak'},
    {id: 2, viewValue: 'Pizza'}
    
  ];
 
  constructor(public gallery: Gallery) {
    //  this.imgArray = [
    //   { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Osteospermum_ecklonis1.JPG/1200px-Osteospermum_ecklonis1.JPG'},
    //   { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Osteospermum_ecklonis1.JPG/1200px-Osteospermum_ecklonis1.JPG'},
    //   { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Osteospermum_ecklonis1.JPG/1200px-Osteospermum_ecklonis1.JPG'},
    //   { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Osteospermum_ecklonis1.JPG/1200px-Osteospermum_ecklonis1.JPG'},
    //   { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Osteospermum_ecklonis1.JPG/1200px-Osteospermum_ecklonis1.JPG'},
  
    // ]
   }

  ngOnInit() {

    this.imgArray = data.map(item =>
      new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

    this.basicLightboxExample();

    this.withCustomGalleryConfig();
  }

  
  basicLightboxExample() {
    this.gallery.ref().load(this.imgArray);
  }

  


  /**
   * Use custom gallery config with the lightbox
   */
  withCustomGalleryConfig() {

    // 2. Get a lightbox gallery ref
    const lightboxGalleryRef = this.gallery.ref('anotherLightbox');

    // (Optional) Set custom gallery config to this lightbox
    lightboxGalleryRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // 3. Load the items into the lightbox
    lightboxGalleryRef.load(this.imgArray);
  }

  onshowTrans() {
    this.showTrans = !this.showTrans;
  }
}


const data = [
    
  {
    srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
  }
]

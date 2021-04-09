import React from 'react'
import jQuery, {
  setREVStartSize,
  revslider_showDoubleJqueryError,
} from 'jquery'

class Main extends React.Component {
  componentDidMount() {
    // var revapi1, tpj
    // jQuery(function () {
    //   tpj = jQuery
    //   if (tpj('#rev_slider_1_1').revolution == undefined) {
    //     revslider_showDoubleJqueryError('#rev_slider_1_1')
    //   } else {
    //     revapi1 = tpj('#rev_slider_1_1')
    //       .show()
    //       .revolution({
    //         jsFileLocation:
    //           '//laurent.qodeinteractive.com/wp-content/plugins/revslider/public/assets/js/',
    //         sliderLayout: 'fullscreen',
    //         duration: '4500ms',
    //         visibilityLevels: '1920,1601,1025,730',
    //         gridwidth: '1100,800,700,480',
    //         gridheight: '840,582,900,720',
    //         minHeight: '',
    //         editorheight: '840,582,900,720',
    //         responsiveLevels: '1920,1601,1025,730',
    //         disableProgressBar: 'on',
    //         navigation: {
    //           onHoverStop: false,
    //           arrows: {
    //             enable: true,
    //             tmp:
    //               '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25.109px" height="34.906px" viewBox="0 0 25.109 34.906" enable-background="new 0 0 25.109 34.906" xml:space="preserve">                    <polyline fill="none" stroke="currentColor" stroke-miterlimit="10" points="24.67,34.59 11.653,17.464 24.67,0.338 "/>                    <polyline fill="none" class="eltdf-popout" stroke="currentColor" stroke-miterlimit="10" points="13.688,34.59 0.671,17.464 13.688,0.338 "/></svg>',
    //             style: 'newnavclass_1',
    //             hide_onmobile: true,
    //             hide_under: '778px',
    //             left: {
    //               h_offset: 30,
    //             },
    //             right: {
    //               h_offset: 30,
    //             },
    //           },
    //           bullets: {
    //             enable: true,
    //             tmp: '<button class="dot"><span></span></button>',
    //             style: 'newnavclass_2',
    //             hide_onmobile: true,
    //             hide_under: '678px',
    //             v_offset: 50,
    //             space: 45,
    //           },
    //         },
    //         parallax: {
    //           levels: [
    //             5,
    //             10,
    //             15,
    //             20,
    //             25,
    //             30,
    //             35,
    //             40,
    //             45,
    //             46,
    //             47,
    //             48,
    //             49,
    //             50,
    //             51,
    //             30,
    //           ],
    //           type: 'scroll',
    //           origo: 'slideCenter',
    //           speed: 0,
    //         },
    //         fallbacks: {
    //           allowHTML5AutoPlayOnAndroid: true,
    //         },
    //       })
    //   }
    // })
    // var htmlDivCss = unescape(
    //   '.tp-leftarrow%2C%0A.tp-rightarrow%20%7B%0A%20%20color%3A%20%23c9ab81%3B%0A%20%20background%3A%20none%0A%7D%0A%0A.tp-leftarrow%3Abefore%2C%0A.tp-rightarrow%3Abefore%20%7B%0A%20%20display%3A%20none%0A%7D%0A%0A.tp-leftarrow%20svg%2C%0A.tp-rightarrow%20svg%20%7B%0A%20%20max-height%3A%20100%25%3B%0A%20%20width%3A%20auto%3B%0A%20%20stroke-width%3A%201px%3B%0A%20%20transform%3A%20translateX%280%29%3B%0A%7D%0A%0A.tp-rightarrow%20svg%20%7B%0A%20transform%3A%20translateX%280%29%20scaleX%28-1%29%0A%7D%0A%0A.tp-leftarrow%20svg%20.eltdf-popout%20%7B%0A%20%20%20%20stroke-dashoffset%3A%2043%3B%0A%20%20%20%20stroke-dasharray%3A%2043%3B%0A%20%20%20%20stroke-linejoin%3A%20round%3B%0A%20%20%20%20stroke-miterlimit%3A%2010%3B%0A%20%20%20%20stroke-linecap%3A%20butt%3B%0A%20%20%20%20transform%3A%20rotateX%28180deg%29%3B%0A%20%20%20%20transform-origin%3A%20center%20center%3B%0A%20%20%20%20transition%3A%20stroke-dashoffset%20.5s%20cubic-bezier%280.48%2C%200.57%2C%200.33%2C%200.89%29%3B%0A%7D%0A%0A.tp-leftarrow%3Ahover%20svg%20.eltdf-popout%2C%0A.tp-rightarrow%3Ahover%20svg%20.eltdf-popout%20%7B%0A%20%20%20%20transform%3A%20translateX%280%29%20rotateX%28180deg%29%3B%0A%20%20%20%20stroke-dashoffset%3A%200%3B%0A%20%20%20%20stroke-dasharray%3A%2043%3B%0A%20%20%20%20transition%3A%20stroke-dashoffset%20.5s%20cubic-bezier%280.48%2C%200.57%2C%200.33%2C%200.89%29%3B%0A%7D%0A%0A.tp-leftarrow%3Ahover%2C%0A.tp-rightarrow%3Ahover%20%7B%0A%20%20%09background%3A%20none%0A%7D%0A%0A%0A.tp-rightarrow%20svg%20.eltdf-popout%20%7B%0A%20%20%20%20stroke-dashoffset%3A%2043%3B%0A%20%20%20%20stroke-dasharray%3A%2043%3B%0A%20%20%20%20stroke-linejoin%3A%20round%3B%0A%20%20%20%20stroke-miterlimit%3A%2010%3B%0A%20%20%20%20stroke-linecap%3A%20butt%3B%0A%20%20%20%20transform%3A%20rotateX%28180deg%29%3B%0A%20%20%20%20transform-origin%3A%20center%20center%3B%0A%20%20%20%20transition%3A%20stroke-dashoffset%20.5s%20cubic-bezier%280.48%2C%200.57%2C%200.33%2C%200.89%29%3B%0A%7D%0A%0A.tp-rightarrow%3Ahover%20svg%20%7B%0A%20%20%09transform%3A%20scaleX%28-1%29%3B%0A%7D%0A.tp-bullets%20%7B%0A%20%20text-align%3A%20center%3B%0A%20%20margin%3A%200%3B%0A%20%20counter-reset%3A%20dots%3B%0A%20%20box-sizing%3A%20content-box%3B%0A%7D%0A.tp-bullet%20%7B%0A%20%20width%3Aauto%3B%0A%20%20height%3A%20auto%3B%0A%7D%0A%0A.tp-bullet%2C%0A.tp-bullet%3Ahover%2C%0A.tp-bullet.selected%2C%0A%23rb_tlw%20button%20%7B%0A%20%20background%3A%20none%3B%0A%20%20box-sizing%3A%20content-box%3B%0A%7D%0A%0A%23rb_tlw%20button%3Ahover%20%7B%0A%20%20background%3Anone%0A%7D%0A%0A.tp-bullets%20.dot%20%7B%0A%20%20position%3A%20relative%3B%0A%20%20bottom%3A%200%3B%0A%20%20display%3A%20inline-block%3B%0A%20%20vertical-align%3A%20middle%3B%0A%20%20padding%3A%200%20%21important%3B%0A%20%20margin%3A%200%3B%0A%20%20background%3A%20none%3B%0A%20%20border%3A%200%3B%0A%20%20border-radius%3A%200%3B%0A%20%20outline%3A%20none%3B%0A%20%20-webkit-appearance%3A%20none%3B%0A%20%20overflow%3A%20hidden%3B%0A%20%20cursor%3Apointer%3B%0A%7D%0A%0A.tp-bullets%20.dot%20span%20%7B%0A%20%20display%3A%20inline-block%3B%0A%20%20vertical-align%3A%20middle%3B%0A%20%20width%3A%2012px%3B%0A%20%20height%3A%202.2em%3B%0A%20%20background-color%3A%20transparent%3B%0A%20%20border%3A%20none%3B%0A%20%20padding-top%3A%205px%3B%0A%20%20color%3A%20%23c9ab81%20%21important%3B%0A%7D%0A%0A.eltdf-safari%20.tp-bullets%20.dot%20span%20%7B%0A%20%20height%3A%203em%3B%0A%20%20padding-top%3A%206px%3B%0A%7D%0A%0A.tp-bullets%20.dot%20span%3Abefore%20%7B%0A%20%20content%3A%20counter%28dots%29%3B%0A%20%20counter-increment%3A%20dots%3B%0A%20%20position%3A%20absolute%3B%0A%20%20top%3A%20calc%28100%25%20-%201.5em%29%3B%0A%20%20left%3A%202px%3B%0A%20%20font-family%3A%20%27caviar_dreamsbold%27%2C%20sans-serif%3B%0A%20%20font-size%3A%2012px%3B%0A%20%20font-weight%3A%20700%3B%0A%20%20letter-spacing%3A%20.23em%3B%0A%20%20color%3A%20inherit%3B%0A%20%20transform%3A%20translateY%280%29%3B%0A%20%20transition%3A%20transform%20.2s%20ease-out%20.2s%2C%20color%20.2s%20ease-in-out%3B%0A%7D%0A%0A.tp-bullets%20.dot%20span%3Aafter%20%7B%0A%20%20content%3A%20%27%27%3B%0A%20%20display%3A%20block%3B%0A%20%20width%3A%20100%25%3B%0A%20%20height%3A%203px%3B%0A%20%20border-top%3A%201px%20solid%20%23c9ab81%3B%0A%20%20border-bottom%3A%201px%20solid%20%20%23c9ab81%3B%0A%20%20position%3A%20relative%3B%0A%20%20left%3A%20-1px%3B%0A%20%20bottom%3A%20-24px%3B%0A%20%20transform%3A%20translateY%28100%25%29%3B%0A%20%20transition%3A%20transform%20.2s%20ease-out%20.1s%3B%0A%7D%0A%0A.tp-bullets%20.dot%3Ahover%20span%3Abefore%20%7B%0A%20%20color%3A%20%23e3c59b%3B%0A%7D%0A%0A.tp-bullet.selected%20.dot%3Ahover%20span%3Abefore%20%7B%0A%20%20color%3A%20inherit%3B%0A%7D%0A%0A.tp-bullet.selected%20.dot%20span%3Abefore%20%7B%0A%20%20transform%3A%20translateY%28-1em%29%3B%0A%20%20transition%3A%20transform%20.2s%20ease-in%3B%0A%7D%0A%0A.tp-bullet.selected%20.dot%20span%3Aafter%20%7B%0A%20%20transform%3A%20translateY%28-6px%29%3B%0A%20%20transition%3A%20transform%20.2s%20ease-in%20.1s%3B%0A%7D%0A'
    // )
    // var htmlDiv = document.getElementById('rs-plugin-settings-inline-css')
    // if (htmlDiv) {
    //   htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss
    // } else {
    //   var htmlDiv = document.createElement('div')
    //   htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>'
    //   document
    //     .getElementsByTagName('head')[0]
    //     .appendChild(htmlDiv.childNodes[0])
    // }
    // var htmlDivCss = unescape('%0A%0A%0A%0A%0A%0A')
    // var htmlDiv = document.getElementById('rs-plugin-settings-inline-css')
    // if (htmlDiv) {
    //   htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss
    // } else {
    //   var htmlDiv = document.createElement('div')
    //   htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>'
    //   document
    //     .getElementsByTagName('head')[0]
    //     .appendChild(htmlDiv.childNodes[0])
    // }
  }
  render() {
    return (
      <>
        <a id="eltdf-back-to-top" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="43.047px"
            height="43.031px"
            viewBox="0 0 43.047 43.031"
            enable-background="new 0 0 43.047 43.031"
            xmlSpace="preserve"
          >
            <circle
              fill="none"
              stroke="#BC9A6B"
              stroke-miterlimit="10"
              cx="21.523"
              cy="21.531"
              r="20.986"
            />
            <circle
              fill="none"
              stroke="#BC9A6B"
              class="eltdf-popout"
              stroke-miterlimit="10"
              cx="21.523"
              cy="21.531"
              r="16.049"
            />
            <polyline
              fill="none"
              stroke="#BC9A6B"
              stroke-miterlimit="10"
              points="15.205,23.875 21.523,18.573 27.842,23.875 "
            />
          </svg>
        </a>
        <div class="eltdf-content" style={{ marginTop: '-110px' }}>
          <div class="eltdf-content-inner">
            <div class="eltdf-full-width">
              <div class="eltdf-full-width-inner">
                <div class="eltdf-grid-lines-holder eltdf-grid-columns-5">
                  <div class="eltdf-grid-line eltdf-grid-column-1"></div>
                  <div class="eltdf-grid-line eltdf-grid-column-2"></div>
                  <div class="eltdf-grid-line eltdf-grid-column-3"></div>
                  <div class="eltdf-grid-line eltdf-grid-column-4"></div>
                  <div class="eltdf-grid-line eltdf-grid-column-5"></div>
                </div>
                <div class="eltdf-grid-row">
                  <div class="eltdf-page-content-holder eltdf-grid-col-12">
                    <div class="eltdf-row-grid-section-wrapper eltdf-content-aligment-center">
                      <div class="eltdf-row-grid-section">
                        <div class="vc_row wpb_row vc_row-fluid">
                          <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner">
                              <div class="wpb_wrapper">
                                <p class="rs-p-wp-fix"></p>
                                <rs-module-wrap
                                  id="rev_slider_1_1_wrapper"
                                  data-source="gallery"
                                  style={{
                                    background: 'transparent; padding: 0',
                                  }}
                                >
                                  <rs-module
                                    id="rev_slider_1_1"
                                    style={{ display: 'none' }}
                                    data-version="6.1.5"
                                  >
                                    <rs-slides>
                                      <rs-slide
                                        data-key="rs-8"
                                        data-title="Slide"
                                        data-thumb="//laurent.qodeinteractive.com/wp-content/uploads/2019/12/main-h-new-rev-img-1-50x100.jpg"
                                        data-anim="ei:d;eo:d;s:d;r:0;t:fade;sl:d;"
                                      >
                                        <img
                                          src="//laurent.qodeinteractive.com/wp-content/uploads/2019/12/main-h-new-rev-img-1.jpg"
                                          alt="d"
                                          title="main-h-new-rev-img-1"
                                          width="1920"
                                          height="1100"
                                          data-parallax="5"
                                          class="rev-slidebg"
                                          data-no-retina
                                        />
                                        <rs-layer
                                          id="slider-1-slide-8-layer-0"
                                          data-type="text"
                                          data-color="#c9ab81"
                                          data-xy="x:c;xo:-440px,-317px,-141px,-68px;y:m;yo:-43px,-34px,-148px,-113px;"
                                          data-text="w:normal;s:120,75,75,42;l:145,120,120,50;ls:28px,25px,25px,12px;a:center;"
                                          data-dim="w:264px,264px,264px,156px;"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="sX:0.9;sY:0.9;"
                                          data-frame_1="e:Power2.easeInOut;st:260;sp:1200;sR:260;"
                                          data-frame_999="y:50;o:0;e:Power2.easeInOut;st:w;sp:850;sR:3040;"
                                          style={{
                                            zIndex: '5',
                                            fontFamily:
                                              'metropolis1920regular sans-serif',
                                          }}
                                        >
                                          The{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-8-layer-1"
                                          data-type="text"
                                          data-color="#c9ab81"
                                          data-xy="x:c;xo:0,0,0,-10px;y:m;yo:-138px,-116px,-233px,-160px;"
                                          data-text="w:normal;s:25,25,25,19;l:35,35,35,28;a:center;"
                                          data-dim="w:423px,423px,423px,273px;"
                                          data-vbility="t,t,t,f"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="y:50;"
                                          data-frame_1="e:Power2.easeInOut;st:190;sp:1000;sR:190;"
                                          data-frame_999="y:-50;o:0;st:w;sp:800;sR:3310;"
                                          style={{
                                            zIndex: '13',
                                            fontFamily: 'Miniver',
                                          }}
                                        >
                                          welcome to our delicious corner{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-8-layer-2"
                                          data-type="text"
                                          data-xy="x:c;y:m;yo:78px,66px,66px,59px;"
                                          data-text="w:normal;s:23;l:33;fw:300;a:center;"
                                          data-dim="w:681px,681px,598px,339px;"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="y:50;"
                                          data-frame_1="e:Power2.easeInOut;st:580;sp:1300;sR:580;"
                                          data-frame_999="y:50;o:0;e:Power2.easeInOut;st:w;sp:1000;sR:2620;"
                                          style={{
                                            zIndex: '9',
                                            fontFamily: 'Josefin Sans',
                                          }}
                                        >
                                          We have a proper passion for cooking.
                                          Love is the secret ingredient that
                                          makes all our meals taste better and
                                          magical.{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-8-layer-3"
                                          data-type="text"
                                          data-xy="x:c;y:m;yo:202px,175px,189px,183px;"
                                          data-text="w:normal;a:center;"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="y:50;"
                                          data-frame_1="e:Power2.easeInOut;st:750;sp:1300;sR:750;"
                                          data-frame_999="y:50;o:0;e:Power2.easeInOut;st:w;sp:1000;sR:2450;"
                                          style={{
                                            zIndex: '8',
                                            fontFamily: 'Roboto',
                                          }}
                                        >
                                          <a
                                            itemprop="url"
                                            href="https://laurent.qodeinteractive.com/portfolio-item/shrimp-pasta/"
                                            target="_self"
                                            class="eltdf-btn eltdf-btn-large eltdf-btn-outline"
                                          >
                                            <span class="eltdf-btn-text">
                                              View More
                                            </span>
                                          </a>{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-8-layer-4"
                                          data-type="text"
                                          data-color="#c9ab81"
                                          data-xy="x:c;xo:-97px,-75px,114px,66px;y:m;yo:-43px,-34px,-148px,-113px;"
                                          data-text="w:normal;s:120,75,75,42;l:145,120,120,50;ls:28px,25px,25px,12px;a:center;"
                                          data-dim="w:417px,417px,417px,237px;"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="sX:0.9;sY:0.9;"
                                          data-frame_1="e:Power2.easeInOut;st:360;sp:1200;sR:360;"
                                          data-frame_999="y:50;o:0;e:Power2.easeInOut;st:w;sp:1050;sR:2940;"
                                          style={{
                                            zIndex: '11',
                                            fontFamily:
                                              'metropolis1920regular sans-serif',
                                          }}
                                        >
                                          Best{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-8-layer-5"
                                          data-type="text"
                                          data-color="#c9ab81"
                                          data-xy="x:c;xo:355px,266px,12px,10px;y:m;yo:-43px,-34px,-36px,-53px;"
                                          data-text="w:normal;s:120,75,75,42;l:145,120,120,50;ls:28px,25px,25px,12px;a:center;"
                                          data-dim="w:472px,472px,472px,262px;"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="sX:0.9;sY:0.9;"
                                          data-frame_1="e:Power2.easeInOut;st:470;sp:1200;sR:470;"
                                          data-frame_999="y:50;o:0;e:Power2.easeInOut;st:w;sp:1250;sR:2830;"
                                          style={{
                                            zIndex: '10',
                                            fontFamily:
                                              'metropolis1920regular sans-serif',
                                          }}
                                        >
                                          Dishes{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-8-layer-22"
                                          data-type="image"
                                          data-xy="x:c;xo:651px,486px,327px,327px;y:m;yo:-37px,-28px,-88px,-88px;"
                                          data-text="w:normal;"
                                          data-dim="w:['56px','56px','56px','56px'];h:['10px','10px','10px','10px'];"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="sX:0.9;sY:0.9;"
                                          data-frame_1="st:440;sp:1000;sR:440;"
                                          data-frame_999="o:0;st:w;sR:3060;"
                                          style={{ zIndex: '15' }}
                                        >
                                          <img
                                            src="//laurent.qodeinteractive.com/wp-content/uploads/2019/11/rev-img.png"
                                            alt="c"
                                            width="56"
                                            height="10"
                                            data-no-retina
                                          />{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-8-layer-23"
                                          data-type="image"
                                          data-xy="x:c;xo:-640px,-482px,-327px,-327px;y:m;yo:-37px,-28px,-88px,-88px;"
                                          data-text="w:normal;"
                                          data-dim="w:['56px','56px','56px','56px'];h:['10px','10px','10px','10px'];"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="sX:0.9;sY:0.9;"
                                          data-frame_1="st:510;sp:1000;sR:510;"
                                          data-frame_999="o:0;st:w;sR:2990;"
                                          style={{ zIndex: '14' }}
                                        >
                                          <img
                                            src="//laurent.qodeinteractive.com/wp-content/uploads/2019/11/rev-img.png"
                                            alt="c"
                                            width="56"
                                            height="10"
                                            data-no-retina
                                          />
                                        </rs-layer>
                                      </rs-slide>
                                      <rs-slide
                                        data-key="rs-40"
                                        data-title="Slide"
                                        data-thumb="//laurent.qodeinteractive.com/wp-content/uploads/2019/12/main-h-new-rev-img-2-50x100.jpg"
                                        data-anim="ei:d;eo:d;s:d;r:0;t:fade;sl:d;"
                                      >
                                        <img
                                          src="//laurent.qodeinteractive.com/wp-content/uploads/2019/12/main-h-new-rev-img-2.jpg"
                                          alt="x"
                                          title="main-h-new-rev-img-2"
                                          width="1920"
                                          height="1100"
                                          data-parallax="5"
                                          class="rev-slidebg"
                                          data-no-retina
                                        />
                                        <rs-layer
                                          id="slider-1-slide-40-layer-0"
                                          data-type="text"
                                          data-color="#c9ab81"
                                          data-xy="x:c;xo:-512px,-355px,-161px,-94px;y:m;yo:-43px,-34px,-148px,-113px;"
                                          data-text="w:normal;s:120,75,75,42;l:145,120,120,50;ls:28px,25px,25px,12px;a:center;"
                                          data-dim="w:264px,264px,264px,156px;"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="sX:0.9;sY:0.9;"
                                          data-frame_1="e:Power2.easeInOut;st:260;sp:1200;sR:260;"
                                          data-frame_999="y:50;o:0;e:Power2.easeInOut;st:w;sp:850;sR:3040;"
                                          style={{
                                            zIndex: '5',
                                            fontFamily:
                                              'metropolis1920regular sans-serif',
                                          }}
                                        >
                                          The{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-40-layer-1"
                                          data-type="text"
                                          data-color="#c9ab81"
                                          data-xy="x:c;y:m;yo:-138px,-116px,-233px,-160px;"
                                          data-text="w:normal;s:25,25,25,19;l:35,35,35,28;a:center;"
                                          data-dim="w:423px,423px,423px,295px;"
                                          data-vbility="t,t,t,f"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="y:50;"
                                          data-frame_1="e:Power2.easeInOut;st:190;sp:1000;sR:190;"
                                          data-frame_999="y:-50;o:0;st:w;sp:800;sR:3310;"
                                          style={{
                                            zIndex: '13',
                                            fontFamily: 'Miniver',
                                          }}
                                        >
                                          take a sip of our innovative drinks{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-40-layer-2"
                                          data-type="text"
                                          data-xy="x:c;y:m;yo:78px,66px,66px,59px;"
                                          data-text="w:normal;s:23;l:33;fw:300;a:center;"
                                          data-dim="w:743px,743px,598px,301px;"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="y:50;"
                                          data-frame_1="e:Power2.easeInOut;st:580;sp:1300;sR:580;"
                                          data-frame_999="y:50;o:0;e:Power2.easeInOut;st:w;sp:1000;sR:2620;"
                                          style={{
                                            zIndex: '9',
                                            fontFamily: 'Josefin Sans',
                                          }}
                                        >
                                          From the delicious food to wonderful
                                          cocktails, Laurent’s offer is
                                          guaranteed to satisfy all of your
                                          taste buds.{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-40-layer-3"
                                          data-type="text"
                                          data-xy="x:c;y:m;yo:202px,175px,189px,183px;"
                                          data-text="w:normal;a:center;"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="y:50;"
                                          data-frame_1="e:Power2.easeInOut;st:750;sp:1300;sR:750;"
                                          data-frame_999="y:50;o:0;e:Power2.easeInOut;st:w;sp:1000;sR:2450;"
                                          style={{
                                            zIndex: '8',
                                            fontFamily: 'Roboto',
                                          }}
                                        >
                                          <a
                                            itemprop="url"
                                            href="https://laurent.qodeinteractive.com/portfolio-item/shrimp-pasta/"
                                            target="_self"
                                            class="eltdf-btn eltdf-btn-large eltdf-btn-outline"
                                          >
                                            <span class="eltdf-btn-text">
                                              View More
                                            </span>
                                          </a>{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-40-layer-4"
                                          data-type="text"
                                          data-color="#c9ab81"
                                          data-xy="x:c;xo:-139px,-63px,134px,67px;y:m;yo:-43px,-34px,-148px,-113px;"
                                          data-text="w:normal;s:120,75,75,42;l:145,120,120,50;ls:28px,25px,25px,12px;a:center;"
                                          data-dim="w:417px,417px,417px,237px;"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="sX:0.9;sY:0.9;"
                                          data-frame_1="e:Power2.easeInOut;st:360;sp:1200;sR:360;"
                                          data-frame_999="y:50;o:0;e:Power2.easeInOut;st:w;sp:1050;sR:2940;"
                                          style={{
                                            zIndex: '11',
                                            fontFamily:
                                              'metropolis1920regular sans-serif',
                                          }}
                                        >
                                          Finest{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-40-layer-5"
                                          data-type="text"
                                          data-color="#c9ab81"
                                          data-xy="x:c;xo:423px,320px,12px,0;y:m;yo:-43px,-34px,-36px,-53px;"
                                          data-text="w:normal;s:120,75,75,42;l:145,120,120,50;ls:28px,25px,25px,12px;a:center;"
                                          data-dim="w:472px,472px,472px,262px;"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="sX:0.9;sY:0.9;"
                                          data-frame_1="e:Power2.easeInOut;st:470;sp:1200;sR:470;"
                                          data-frame_999="y:50;o:0;e:Power2.easeInOut;st:w;sp:1250;sR:2830;"
                                          style={{
                                            zIndex: '10',
                                            fontFamily:
                                              'metropolis1920regular sans-serif',
                                          }}
                                        >
                                          Drinks{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-40-layer-22"
                                          data-type="image"
                                          data-xy="x:c;xo:714px,521px,327px,327px;y:m;yo:-37px,-28px,-88px,-88px;"
                                          data-text="w:normal;"
                                          data-dim="w:['56px','56px','56px','56px'];h:['10px','10px','10px','10px'];"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="sX:0.9;sY:0.9;"
                                          data-frame_1="st:440;sp:1000;sR:440;"
                                          data-frame_999="o:0;st:w;sR:3060;"
                                          style={{ zIndex: '15' }}
                                        >
                                          <img
                                            src="//laurent.qodeinteractive.com/wp-content/uploads/2019/11/rev-img.png"
                                            alt="c"
                                            width="56"
                                            height="10"
                                            data-no-retina
                                          />{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-40-layer-23"
                                          data-type="image"
                                          data-xy="x:c;xo:-712px,-518px,-327px,-327px;y:m;yo:-37px,-28px,-88px,-88px;"
                                          data-text="w:normal;"
                                          data-dim="w:['56px','56px','56px','56px'];h:['10px','10px','10px','10px'];"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="sX:0.9;sY:0.9;"
                                          data-frame_1="st:510;sp:1000;sR:510;"
                                          data-frame_999="o:0;st:w;sR:2990;"
                                          style={{ zIndex: '14' }}
                                        >
                                          <img
                                            src="//laurent.qodeinteractive.com/wp-content/uploads/2019/11/rev-img.png"
                                            alt="c"
                                            width="56"
                                            height="10"
                                            data-no-retina
                                          />
                                        </rs-layer>
                                      </rs-slide>
                                      <rs-slide
                                        data-key="rs-41"
                                        data-title="Slide"
                                        data-thumb="//laurent.qodeinteractive.com/wp-content/uploads/2019/12/main-h-new-rev-img-3-50x100.jpg"
                                        data-anim="ei:d;eo:d;s:d;r:0;t:fade;sl:d;"
                                      >
                                        <img
                                          src="//laurent.qodeinteractive.com/wp-content/uploads/2019/12/main-h-new-rev-img-3.jpg"
                                          alt="d"
                                          title="main-h-new-rev-img-3"
                                          width="1920"
                                          height="1100"
                                          data-parallax="5"
                                          class="rev-slidebg"
                                          data-no-retina
                                        />
                                        <rs-layer
                                          id="slider-1-slide-41-layer-0"
                                          data-type="text"
                                          data-color="#c9ab81"
                                          data-xy="x:c;xo:-440px,-311px,-146px,-70px;y:m;yo:-43px,-34px,-148px,-113px;"
                                          data-text="w:normal;s:120,75,75,42;l:145,120,120,50;ls:28px,25px,25px,12px;a:center;"
                                          data-dim="w:264px,264px,264px,156px;"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="sX:0.9;sY:0.9;"
                                          data-frame_1="e:Power2.easeInOut;st:260;sp:1200;sR:260;"
                                          data-frame_999="y:50;o:0;e:Power2.easeInOut;st:w;sp:850;sR:3040;"
                                          style={{
                                            zIndex: '5',
                                            fontFamily:
                                              'metropolis1920regular sans-serif',
                                          }}
                                        >
                                          The{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-41-layer-1"
                                          data-type="text"
                                          data-color="#c9ab81"
                                          data-xy="x:c;y:m;yo:-138px,-116px,-233px,-160px;"
                                          data-text="w:normal;s:25,25,25,19;l:35,35,35,28;a:center;"
                                          data-dim="w:423px,423px,423px,284px;"
                                          data-vbility="t,t,t,f"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="y:50;"
                                          data-frame_1="st:190;sp:1000;sR:190;"
                                          data-frame_999="y:-50;o:0;e:Power2.easeInOut;st:w;sp:800;sR:3310;"
                                          style={{
                                            zIndex: '13',
                                            fontFamily: 'Miniver',
                                          }}
                                        >
                                          the most delicious flavor combos{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-41-layer-2"
                                          data-type="text"
                                          data-xy="x:c;y:m;yo:78px,66px,66px,59px;"
                                          data-text="w:normal;s:23;l:33;fw:300;a:center;"
                                          data-dim="w:701px,701px,598px,298px;"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="y:50;"
                                          data-frame_1="e:Power2.easeInOut;st:580;sp:1300;sR:580;"
                                          data-frame_999="y:50;o:0;e:Power2.easeInOut;st:w;sp:1000;sR:2620;"
                                          style={{
                                            zIndex: '9',
                                            fontFamily: 'Josefin Sans',
                                          }}
                                        >
                                          Experimentation in the kitchen and
                                          focus on excellence are among our main
                                          driving forces in cooking.{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-41-layer-3"
                                          data-type="text"
                                          data-xy="x:c;y:m;yo:202px,175px,189px,183px;"
                                          data-text="w:normal;a:center;"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="y:50;"
                                          data-frame_1="e:Power2.easeInOut;st:750;sp:1300;sR:750;"
                                          data-frame_999="y:50;o:0;e:Power2.easeInOut;st:w;sp:1000;sR:2450;"
                                          style={{
                                            zIndex: '8',
                                            fontFamily: 'Roboto',
                                          }}
                                        >
                                          <a
                                            itemprop="url"
                                            href="https://laurent.qodeinteractive.com/portfolio-item/shrimp-pasta/"
                                            target="_self"
                                            class="eltdf-btn eltdf-btn-large eltdf-btn-outline"
                                          >
                                            <span class="eltdf-btn-text">
                                              View More
                                            </span>
                                          </a>{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-41-layer-4"
                                          data-type="text"
                                          data-color="#c9ab81"
                                          data-xy="x:c;xo:-110px,-65px,120px,68px;y:m;yo:-43px,-34px,-148px,-113px;"
                                          data-text="w:normal;s:120,75,75,42;l:145,120,120,50;ls:28px,25px,25px,12px;a:center;"
                                          data-dim="w:417px,417px,417px,237px;"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="sX:0.9;sY:0.9;"
                                          data-frame_1="e:Power2.easeInOut;st:360;sp:1200;sR:360;"
                                          data-frame_999="y:50;o:0;e:Power2.easeInOut;st:w;sp:1050;sR:2940;"
                                          style={{
                                            zIndex: '10',
                                            fontFamily:
                                              'metropolis1920regular sans-serif',
                                          }}
                                        >
                                          Food{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-41-layer-5"
                                          data-type="text"
                                          data-color="#c9ab81"
                                          data-xy="x:c;xo:335px,267px,12px,10px;y:m;yo:-43px,-34px,-36px,-53px;"
                                          data-text="w:normal;s:120,75,75,42;l:145,120,120,50;ls:28px,25px,25px,12px;a:center;"
                                          data-dim="w:472px,472px,472px,262px;"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="sX:0.9;sY:0.9;"
                                          data-frame_1="e:Power2.easeInOut;st:470;sp:1200;sR:470;"
                                          data-frame_999="y:50;o:0;e:Power2.easeInOut;st:w;sp:1250;sR:2830;"
                                          style={{
                                            zIndex: '10',
                                            fontFamily:
                                              'metropolis1920regular sans-serif',
                                          }}
                                        >
                                          Heaven{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-41-layer-22"
                                          data-type="image"
                                          data-xy="x:c;xo:644px,481px,327px,327px;y:m;yo:-37px,-28px,-88px,-88px;"
                                          data-text="w:normal;"
                                          data-dim="w:['56px','56px','56px','56px'];h:['10px','10px','10px','10px'];"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="sX:0.9;sY:0.9;"
                                          data-frame_1="st:440;sp:1000;sR:440;"
                                          data-frame_999="o:0;st:w;sR:3060;"
                                          style={{ zIndex: '15' }}
                                        >
                                          <img
                                            src="//laurent.qodeinteractive.com/wp-content/uploads/2019/11/rev-img.png"
                                            alt="c"
                                            width="56"
                                            height="10"
                                            data-no-retina
                                          />{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-41-layer-23"
                                          data-type="image"
                                          data-xy="x:c;xo:-640px,-473px,-327px,-327px;y:m;yo:-37px,-28px,-88px,-88px;"
                                          data-text="w:normal;"
                                          data-dim="w:['56px','56px','56px','56px'];h:['10px','10px','10px','10px'];"
                                          data-basealign="slide"
                                          data-rsp_o="off"
                                          data-rsp_bd="off"
                                          data-frame_0="sX:0.9;sY:0.9;"
                                          data-frame_1="st:510;sp:1000;sR:510;"
                                          data-frame_999="o:0;st:w;sR:2990;"
                                          style={{ zIndex: '14' }}
                                        >
                                          <img
                                            src="//laurent.qodeinteractive.com/wp-content/uploads/2019/11/rev-img.png"
                                            alt="c"
                                            width="56"
                                            height="10"
                                            data-no-retina
                                          />
                                        </rs-layer>
                                      </rs-slide>
                                    </rs-slides>
                                    <rs-progress
                                      class="rs-bottom"
                                      style={{
                                        visibility: 'hidden !important',
                                      }}
                                    ></rs-progress>
                                  </rs-module>
                                </rs-module-wrap>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="eltdf-row-grid-section-wrapper eltdf-content-aligment-center">
                      <div class="eltdf-row-grid-section">
                        <div class="vc_row wpb_row vc_row-fluid vc_custom_1578664464836">
                          <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner">
                              <div class="wpb_wrapper">
                                <div class="eltdf-elements-holder eltdf-one-column eltdf-responsive-mode-768">
                                  <div
                                    class="eltdf-eh-item"
                                    data-item-class="eltdf-eh-custom-9299"
                                    data-1400-1600="0 27% 40px 27%"
                                    data-1025-1399="0 23% 13px 23%"
                                    data-769-1024="0 20% 70px 20%"
                                    data-681-768="0 10% 0px 10%"
                                    data-680="0 2% 130px 2%"
                                  >
                                    <div class="eltdf-eh-item-inner">
                                      <div
                                        class="eltdf-eh-item-content eltdf-eh-custom-9299"
                                        style={{ padding: '0 31% 70px 31%' }}
                                      >
                                        <div
                                          class="eltdf-section-title-holder eltdf-st-decor-animation"
                                          style={{ textAlign: 'center' }}
                                        >
                                          <div class="eltdf-st-inner">
                                            <span class="eltdf-st-tagline">
                                              Our Story
                                            </span>
                                            <div class="eltdf-st-title-holder">
                                              <div class="decor">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="41.125"
                                                  height="9.146"
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke="#9C7C57"
                                                    stroke-miterlimit="10"
                                                    d="M40.881 8.576L20.562.591.244 8.576"
                                                  />
                                                  <path
                                                    fill="none"
                                                    stroke="#9C7C57"
                                                    stroke-miterlimit="10"
                                                    d="M40.881.591L20.562 8.576.243.591"
                                                  />
                                                </svg>
                                              </div>
                                              <h1 class="eltdf-st-title">
                                                About us
                                              </h1>
                                              <div class="decor">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="41.125"
                                                  height="9.146"
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke="#9C7C57"
                                                    stroke-miterlimit="10"
                                                    d="M40.881 8.576L20.562.591.244 8.576"
                                                  />
                                                  <path
                                                    fill="none"
                                                    stroke="#9C7C57"
                                                    stroke-miterlimit="10"
                                                    d="M40.881.591L20.562 8.576.243.591"
                                                  />
                                                </svg>
                                              </div>
                                            </div>
                                            <p class="eltdf-st-text">
                                              Lorem ipsum dolor sit amet,
                                              consectet adipisicing eli sed do
                                              eiu sm od tempor incididunt ut
                                              abore et dolore mag aliqua. Ut
                                              enim ad minm eniam quis nostrud.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="eltdf-row-grid-section-wrapper eltdf-content-aligment-center">
                      <div class="eltdf-row-grid-section">
                        <div class="vc_row wpb_row vc_row-fluid">
                          <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner vc_custom_1578912658047">
                              <div class="wpb_wrapper">
                                <div class="eltdf-elements-holder eltdf-three-columns eltdf-responsive-mode-680">
                                  <div
                                    class="eltdf-eh-item"
                                    data-item-class="eltdf-eh-custom-8056"
                                    data-1400-1600="170px 0 132px 0"
                                    data-1025-1399="150px 0 160px 0"
                                    data-769-1024="0 0 50px 0"
                                    data-681-768="0 0"
                                    data-680="0 0"
                                  >
                                    <div class="eltdf-eh-item-inner">
                                      <div
                                        class="eltdf-eh-item-content eltdf-eh-custom-8056"
                                        style={{
                                          padding: '195px 10px 160px 0',
                                        }}
                                      >
                                        <div class="eltdf-single-image-holder eltdf-image-appear-from-top">
                                          <div class="eltdf-si-inner">
                                            <img
                                              width="800"
                                              height="1013"
                                              src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-1.jpg"
                                              class="attachment-full size-full"
                                              alt="d"
                                              loading="lazy"
                                              srcset="
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-1.jpg         800w,
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-1-600x760.jpg 600w,
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-1-237x300.jpg 237w,
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-1-768x972.jpg 768w
                                                "
                                              sizes="(max-width: 800px) 100vw, 800px"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="eltdf-eh-item"
                                    data-item-class="eltdf-eh-custom-5197"
                                    data-1400-1600="170px 0 132px 0"
                                    data-1025-1399="150px 0 160px 0"
                                    data-769-1024="0 0 50px 0"
                                    data-681-768="0 0"
                                    data-680="80px 0"
                                  >
                                    <div class="eltdf-eh-item-inner">
                                      <div
                                        class="eltdf-eh-item-content eltdf-eh-custom-5197"
                                        style={{
                                          padding: '202px 73px 160px 73px',
                                        }}
                                      >
                                        <div class="eltdf-single-image-holder eltdf-main-home-middle-svg-pattern eltdf-svg-pattern eltdf-image-appear-none">
                                          <div class="eltdf-si-inner">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="289.828"
                                              height="543.424"
                                            >
                                              <path
                                                fill="none"
                                                stroke="#9A7D57"
                                                stroke-width="1.5"
                                                stroke-miterlimit="10"
                                                d="M0 0l72.457 72.457L0 144.913l72.457 72.457L0 289.826l72.457 72.456L0 434.739l72.457 72.456-36.229 36.229M72.457 0L0 72.457l72.457 72.457L0 217.37l72.457 72.457L0 362.282l72.457 72.457L0 507.195l36.229 36.229m72.457 0l36.229-36.229-72.457-72.456 72.457-72.457-72.457-72.456 72.457-72.457-72.457-72.457 72.457-72.457L72.457 0m72.457 0L72.457 72.457l72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 36.229 36.229m72.457-.001l36.229-36.229-72.457-72.456 72.457-72.457-72.457-72.456 72.457-72.457-72.457-72.457 72.457-72.457L144.914 0m72.457 0l-72.457 72.457 72.457 72.457-72.457 72.457 72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 36.229 36.229m72.457-.002l36.229-36.229-72.457-72.456 72.457-72.457-72.457-72.456 72.457-72.457-72.457-72.457 72.457-72.457L217.371 0m72.457 0l-72.457 72.457 72.457 72.457-72.457 72.457 72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 36.229 36.229M18.113 54.343L0 36.229m54.342-18.115L36.229 0M18.113 18.114L36.228 0M126.8 18.114L108.686 0M90.571 18.114L108.686 0m90.571 18.114L181.143 0m0 0l-18.114 18.114m108.56 0L253.475 0M235.36 18.114L253.475 0m18.24 54.343l18.113-18.114m-271.715 90.57L0 108.685m271.715 18.114l18.113-18.114M18.113 199.256L0 181.142m271.715 18.114l18.113-18.114m-271.715 90.57L0 253.598m271.715 18.114l18.113-18.114M72.457 0v36.229L90.57 54.343m-36.029 0l17.916-18.114M144.914 0v36.229l18.113 18.114m-36.029 0l17.916-18.114M217.368 0v36.229l18.114 18.114M36.229 36.229v36.229l18.113 18.114m54.344-54.343v36.229L126.8 90.571m54.343-54.342v36.229l18.114 18.114M253.6 36.229v36.229l18.113 18.114m-72.262-36.229l17.917-18.114M72.457 72.457v36.229L90.57 126.8m-36.029-.001l17.916-18.114m72.457-36.228v36.229l18.113 18.114m-36.029-.001l17.916-18.114m72.447-36.228v36.229l18.114 18.114m-36.03-.001l17.916-18.114M72.457 144.913v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M72.457 217.37v36.229l18.113 18.114m-36.029-.001l17.916-18.114m72.457-36.228v36.229l18.113 18.114m-36.029-.001l17.916-18.114m72.447-36.228v36.229l18.114 18.114m-36.03-.001l17.916-18.114M72.457 289.827v36.229L90.57 344.17m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M72.457 362.282v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M72.457 434.739v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M18.313 90.571l17.916-18.114M90.77 90.571l17.916-18.114m54.541 18.114l17.916-18.114m54.541 18.114L253.6 72.457M36.229 108.685v36.229l18.113 18.114m54.344-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.113 18.114m-253.4 0l17.916-18.114m54.541 18.114l17.916-18.114m72.457 0l-17.916 18.114m72.457 0l17.916-18.114M36.229 181.142v36.229l18.113 18.114m54.344-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.113 18.114m-253.4-.001l17.916-18.114m54.541 18.114l17.916-18.114m72.457 0l-17.916 18.114m72.457 0L253.6 217.37M36.229 253.598v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115M18.113 344.159L0 326.046m271.715 18.113l18.113-18.113M18.113 416.625L0 398.512m271.715 18.113l18.113-18.113M18.113 489.081L0 470.968m271.715 18.113l18.113-18.113M36.229 326.046v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m72.457-.001l-17.916 18.115m90.373-18.115l-17.916 18.115M36.229 398.511v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115M36.229 470.968v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115m72.457-.001l-17.916 18.115M72.457 507.195v36.229m72.457-36.229v36.229m72.457-36.229v36.229"
                                              />
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="eltdf-eh-item"
                                    data-item-class="eltdf-eh-custom-5662"
                                    data-1400-1600="170px 0 132px 0"
                                    data-1025-1399="150px 0 160px 0"
                                    data-769-1024="0 0 50px 0"
                                    data-681-768="0 0"
                                    data-680="0 0"
                                  >
                                    <div class="eltdf-eh-item-inner">
                                      <div
                                        class="eltdf-eh-item-content eltdf-eh-custom-5662"
                                        style={{
                                          padding: '195px 0 160px 10px',
                                        }}
                                      >
                                        <div class="eltdf-single-image-holder eltdf-image-appear-from-top">
                                          <div class="eltdf-si-inner">
                                            <img
                                              width="800"
                                              height="1013"
                                              src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-2.jpg"
                                              class="attachment-full size-full"
                                              alt="f"
                                              loading="lazy"
                                              srcset="
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-2.jpg         800w,
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-2-600x760.jpg 600w,
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-2-237x300.jpg 237w,
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-2-768x972.jpg 768w
                                                "
                                              sizes="(max-width: 800px) 100vw, 800px"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="vc_row wpb_row vc_row-fluid">
                      <div class="wpb_column vc_column_container vc_col-sm-12">
                        <div class="vc_column-inner">
                          <div class="wpb_wrapper">
                            <div class="eltdf-elements-holder eltdf-two-columns eltdf-responsive-mode-768 fifty-fifty">
                              <div
                                class="eltdf-eh-item"
                                style={{ backgroundColor: '#0f1d22' }}
                                data-item-class="eltdf-eh-custom-8631"
                                data-1400-1600="23% 0% 23% 15%"
                                data-1025-1399="23% 0% 23% 15%"
                                data-769-1024="23% 0%"
                                data-681-768="23% 0%"
                                data-680="23% 0%"
                              >
                                <div class="eltdf-eh-item-inner">
                                  <div
                                    class="eltdf-eh-item-content eltdf-eh-custom-8631"
                                    style={{ padding: '23% 0 23% 4%' }}
                                  >
                                    <div class="eltdf-testimonials-holder clearfix eltdf-testimonials-standard">
                                      <div class="eltdf-testimonials-mark"></div>
                                      <div
                                        class="eltdf-testimonials eltdf-owl-slider"
                                        data-number-of-items="1"
                                        data-enable-loop="yes"
                                        data-enable-autoplay="yes"
                                        data-slider-speed="5000"
                                        data-slider-speed-animation="600"
                                        data-enable-navigation="no"
                                        data-enable-pagination="yes"
                                      >
                                        <div
                                          class="eltdf-testimonial-content"
                                          id="eltdf-testimonials-160"
                                        >
                                          <div class="eltdf-testimonial-text-holder">
                                            <p class="eltdf-testimonial-text">
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipisic sed do
                                              eiusmod tempor incididunt ut
                                              labore et dolore magna aliqua ut
                                              enim ad.
                                            </p>
                                            <h5 class="eltdf-testimonial-author">
                                              <span class="eltdf-testimonials-author-name">
                                                Robert Chang
                                              </span>
                                            </h5>
                                            <p class="eltdf-testimonials-author-job">
                                              Sommelier
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          class="eltdf-testimonial-content"
                                          id="eltdf-testimonials-98"
                                        >
                                          <div class="eltdf-testimonial-text-holder">
                                            <p class="eltdf-testimonial-text">
                                              Ut enim ad minim venia orem ipsum
                                              dolor sit amet, consectetur
                                              adipisic sed do. Eiusmod tempor
                                              incididunt ut labore et dolore
                                              magna.
                                            </p>
                                            <h5 class="eltdf-testimonial-author">
                                              <span class="eltdf-testimonials-author-name">
                                                Jan Winsent
                                              </span>
                                            </h5>
                                            <p class="eltdf-testimonials-author-job">
                                              Cook
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          class="eltdf-testimonial-content"
                                          id="eltdf-testimonials-36"
                                        >
                                          <div class="eltdf-testimonial-text-holder">
                                            <p class="eltdf-testimonial-text">
                                              Eiusmod tempor incididunt ut
                                              labore et dolore magna aliqua. Ut
                                              enim ad minim venia orem ipsum
                                              dolor sit amet, consectetur.
                                            </p>
                                            <h5 class="eltdf-testimonial-author">
                                              <span class="eltdf-testimonials-author-name">
                                                Andrea Chung
                                              </span>
                                            </h5>
                                            <p class="eltdf-testimonials-author-job">
                                              Cook
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="eltdf-eh-item"
                                style={{
                                  backgroundImage:
                                    'url(https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-4.jpg)',
                                }}
                                data-item-class="eltdf-eh-custom-8031"
                                data-681-768="40% 0"
                                data-680="60% 0"
                              >
                                <div class="eltdf-eh-item-inner">
                                  <div class="eltdf-eh-item-content eltdf-eh-custom-8031"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="eltdf-row-grid-section-wrapper eltdf-content-aligment-center">
                      <div class="eltdf-row-grid-section">
                        <div class="vc_row wpb_row vc_row-fluid vc_custom_1577721730223">
                          <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner">
                              <div class="wpb_wrapper">
                                <div class="eltdf-elements-holder eltdf-two-columns eltdf-responsive-mode-1024 fifty-fifty">
                                  <div
                                    class="eltdf-eh-item"
                                    data-item-class="eltdf-eh-custom-2948"
                                    data-1025-1399="0 6% 0 0"
                                    data-769-1024="0 0"
                                    data-681-768="0 0"
                                    data-680="0 0"
                                  >
                                    <div class="eltdf-eh-item-inner">
                                      <div
                                        class="eltdf-eh-item-content eltdf-eh-custom-2948"
                                        style={{ padding: '0 7.8% 0 0' }}
                                      >
                                        <div class="eltdf-single-image-holder eltdf-image-appear-from-top">
                                          <div class="eltdf-si-inner">
                                            <img
                                              width="800"
                                              height="730"
                                              src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-5.jpg"
                                              class="attachment-full size-full"
                                              alt="s"
                                              loading="lazy"
                                              srcset="
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-5.jpg         800w,
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-5-600x548.jpg 600w,
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-5-300x274.jpg 300w,
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-5-768x701.jpg 768w
                                                "
                                              sizes="(max-width: 800px) 100vw, 800px"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="eltdf-eh-item"
                                    data-item-class="eltdf-eh-custom-5764"
                                    data-1400-1600="7.8% 4% 9% 7%"
                                    data-1025-1399="6.3% 0% 9% 6%"
                                    data-769-1024="80px 12% 0 12%"
                                    data-681-768="80px 9% 0 9%"
                                    data-680="80px 0 0 0"
                                  >
                                    <div class="eltdf-eh-item-inner">
                                      <div
                                        class="eltdf-eh-item-content eltdf-eh-custom-5764"
                                        style={{ padding: '52px 2% 9% 10%' }}
                                      >
                                        <div
                                          class="eltdf-section-title-holder eltdf-st-title-wrapped eltdf-st-decor-animation"
                                          style={{ textAlign: 'center' }}
                                        >
                                          <div class="eltdf-st-inner">
                                            <span class="eltdf-st-tagline">
                                              Recommendations
                                            </span>
                                            <div class="eltdf-st-title-holder">
                                              <div class="decor">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="41.125"
                                                  height="9.146"
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke="#9C7C57"
                                                    stroke-miterlimit="10"
                                                    d="M40.881 8.576L20.562.591.244 8.576"
                                                  />
                                                  <path
                                                    fill="none"
                                                    stroke="#9C7C57"
                                                    stroke-miterlimit="10"
                                                    d="M40.881.591L20.562 8.576.243.591"
                                                  />
                                                </svg>
                                              </div>
                                              <h2 class="eltdf-st-title">
                                                Our best specialties
                                              </h2>
                                              <div class="decor">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="41.125"
                                                  height="9.146"
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke="#9C7C57"
                                                    stroke-miterlimit="10"
                                                    d="M40.881 8.576L20.562.591.244 8.576"
                                                  />
                                                  <path
                                                    fill="none"
                                                    stroke="#9C7C57"
                                                    stroke-miterlimit="10"
                                                    d="M40.881.591L20.562 8.576.243.591"
                                                  />
                                                </svg>
                                              </div>
                                            </div>
                                            <p class="eltdf-st-text">
                                              Lorem ipsum dolor sit amet,
                                              consectet adipisicing eli sed do
                                              eiu smotem por incididunt ut abore
                                              et dolore magali qua. Ut enim ad
                                              minm eni amquis nostrud
                                              exercitation.
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          class="vc_empty_space"
                                          style={{ height: '52px' }}
                                        >
                                          <span class="vc_empty_space_inner"></span>
                                        </div>
                                        <a
                                          itemprop="url"
                                          href="https://laurent.qodeinteractive.com/gallery-page/"
                                          target="_self"
                                          class="eltdf-btn eltdf-btn-medium eltdf-btn-outline"
                                        >
                                          <span class="eltdf-btn-text">
                                            View All
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="eltdf-row-grid-section-wrapper"
                      style={{ backgroundColor: '#0f1d22' }}
                    >
                      <div class="eltdf-row-grid-section">
                        <div class="vc_row wpb_row vc_row-fluid vc_custom_1577721733574">
                          <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner">
                              <div class="wpb_wrapper">
                                <div
                                  class="eltdf-section-title-holder eltdf-st-decor-animation"
                                  style={{
                                    padding: '0 3%',
                                    textAlign: 'center',
                                  }}
                                >
                                  <div class="eltdf-st-inner">
                                    <span class="eltdf-st-tagline">
                                      Special selection
                                    </span>
                                    <div class="eltdf-st-title-holder">
                                      <div class="decor">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="41.125"
                                          height="9.146"
                                        >
                                          <path
                                            fill="none"
                                            stroke="#9C7C57"
                                            stroke-miterlimit="10"
                                            d="M40.881 8.576L20.562.591.244 8.576"
                                          />
                                          <path
                                            fill="none"
                                            stroke="#9C7C57"
                                            stroke-miterlimit="10"
                                            d="M40.881.591L20.562 8.576.243.591"
                                          />
                                        </svg>
                                      </div>
                                      <h1 class="eltdf-st-title">
                                        From our menu
                                      </h1>
                                      <div class="decor">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="41.125"
                                          height="9.146"
                                        >
                                          <path
                                            fill="none"
                                            stroke="#9C7C57"
                                            stroke-miterlimit="10"
                                            d="M40.881 8.576L20.562.591.244 8.576"
                                          />
                                          <path
                                            fill="none"
                                            stroke="#9C7C57"
                                            stroke-miterlimit="10"
                                            d="M40.881.591L20.562 8.576.243.591"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="eltdf-row-grid-section-wrapper"
                      style={{ backgroundColor: '#0f1d22' }}
                    >
                      <div class="eltdf-row-grid-section">
                        <div class="vc_row wpb_row vc_row-fluid">
                          <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner">
                              <div class="wpb_wrapper">
                                <div class="eltdf-elements-holder eltdf-two-columns eltdf-responsive-mode-1024 fifty-fifty">
                                  <div
                                    class="eltdf-eh-item"
                                    data-item-class="eltdf-eh-custom-7277"
                                    data-769-1024="0 0"
                                    data-681-768="0 0"
                                    data-680="0 0"
                                  >
                                    <div class="eltdf-eh-item-inner">
                                      <div
                                        class="eltdf-eh-item-content eltdf-eh-custom-7277"
                                        style={{ padding: '0 42px 0 0' }}
                                      >
                                        <div class="eltdf-pricing-holder">
                                          <div class="eltdf-pricing-item">
                                            <div class="eltdf-pricing-main">
                                              <h6 class="eltdf-pricing-title">
                                                Beef burger meal
                                              </h6>
                                              <div class="eltdf-pricing-lines"></div>
                                              <span class="eltdf-pricing-price">
                                                $32
                                              </span>
                                            </div>
                                            <p class="eltdf-pricing-desc">
                                              Classic greek salad, barrel aged
                                              feta cheese, bread
                                            </p>
                                          </div>
                                          <div class="eltdf-pricing-item">
                                            <div class="eltdf-pricing-main">
                                              <h6 class="eltdf-pricing-title">
                                                Roasted lamb rump
                                              </h6>
                                              <div class="eltdf-pricing-lines"></div>
                                              <span class="eltdf-pricing-price">
                                                $25
                                              </span>
                                            </div>
                                            <p class="eltdf-pricing-desc">
                                              Grilled lamb cutlets, pomegranate
                                              glaze, butternut squash
                                            </p>
                                          </div>
                                          <div class="eltdf-pricing-item">
                                            <div class="eltdf-pricing-main">
                                              <h6 class="eltdf-pricing-title">
                                                Pan seared sea bass
                                              </h6>
                                              <div class="eltdf-pricing-lines"></div>
                                              <span class="eltdf-pricing-price">
                                                $38
                                              </span>
                                            </div>
                                            <p class="eltdf-pricing-desc">
                                              Saffron and mussel’s broth, new
                                              potatoes, edamame beans
                                            </p>
                                          </div>
                                          <div class="eltdf-pricing-item">
                                            <div class="eltdf-pricing-main">
                                              <h6 class="eltdf-pricing-title">
                                                King prawns and lobster
                                              </h6>
                                              <div class="eltdf-pricing-lines"></div>
                                              <span class="eltdf-pricing-price">
                                                $38
                                              </span>
                                            </div>
                                            <p class="eltdf-pricing-desc">
                                              Creamy saffron, sauce Vierge
                                            </p>
                                          </div>
                                          <div class="eltdf-pricing-item">
                                            <div class="eltdf-pricing-main">
                                              <h6 class="eltdf-pricing-title">
                                                Citrus cured salmon
                                              </h6>
                                              <div class="eltdf-pricing-lines"></div>
                                              <span class="eltdf-pricing-price">
                                                $41
                                              </span>
                                            </div>
                                            <p class="eltdf-pricing-desc">
                                              Horseradish creme fraiche,
                                              beetroot mousse, oil
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="eltdf-eh-item"
                                    data-item-class="eltdf-eh-custom-5482"
                                    data-769-1024="0 0"
                                    data-681-768="0 0"
                                    data-680="0 0"
                                  >
                                    <div class="eltdf-eh-item-inner">
                                      <div
                                        class="eltdf-eh-item-content eltdf-eh-custom-5482"
                                        style={{ padding: '0 0 0 42px' }}
                                      >
                                        <div class="eltdf-pricing-holder">
                                          <div class="eltdf-pricing-item">
                                            <div class="eltdf-pricing-main">
                                              <h6 class="eltdf-pricing-title">
                                                Pan seared scallops
                                              </h6>
                                              <div class="eltdf-pricing-lines"></div>
                                              <span class="eltdf-pricing-price">
                                                $29
                                              </span>
                                            </div>
                                            <p class="eltdf-pricing-desc">
                                              Saffron, celeriac puree, black
                                              pudding, olive oil
                                            </p>
                                          </div>
                                          <div class="eltdf-pricing-item">
                                            <div class="eltdf-pricing-main">
                                              <h6 class="eltdf-pricing-title">
                                                Baked Camembert
                                              </h6>
                                              <div class="eltdf-pricing-lines"></div>
                                              <span class="eltdf-pricing-price">
                                                $25
                                              </span>
                                            </div>
                                            <p class="eltdf-pricing-desc">
                                              Red onion marmelade, garlic
                                              Foccacia bread, grilled figs
                                            </p>
                                          </div>
                                          <div class="eltdf-pricing-item">
                                            <div class="eltdf-pricing-main">
                                              <h6 class="eltdf-pricing-title">
                                                Braised ox cheek ravioli
                                              </h6>
                                              <div class="eltdf-pricing-lines"></div>
                                              <span class="eltdf-pricing-price">
                                                $23
                                              </span>
                                            </div>
                                            <p class="eltdf-pricing-desc">
                                              Mediterranean olives casserole,
                                              celeriac puree, mushrooms
                                            </p>
                                          </div>
                                          <div class="eltdf-pricing-item">
                                            <div class="eltdf-pricing-main">
                                              <h6 class="eltdf-pricing-title">
                                                Corn fed chicken
                                              </h6>
                                              <div class="eltdf-pricing-lines"></div>
                                              <span class="eltdf-pricing-price">
                                                $17
                                              </span>
                                            </div>
                                            <p class="eltdf-pricing-desc">
                                              Wild mushrooms, truffle potatoes,
                                              braised leeks, carrots
                                            </p>
                                          </div>
                                          <div class="eltdf-pricing-item">
                                            <div class="eltdf-pricing-main">
                                              <h6 class="eltdf-pricing-title">
                                                Nduja pork chicken terrine
                                              </h6>
                                              <div class="eltdf-pricing-lines"></div>
                                              <span class="eltdf-pricing-price">
                                                $41
                                              </span>
                                            </div>
                                            <p class="eltdf-pricing-desc">
                                              Smoked duck breast, pistachio,
                                              smoked pancetta
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="eltdf-svg-pattern-holder eltdf-pattern-position-left"
                      style={{ left: '-60px', transform: 'translateY(40px)' }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="eltdf-main-home-svg-pattern"
                        width="326.209"
                        height="326"
                      >
                        <path
                          fill="none"
                          stroke="#9A7D57"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          d="M39.856 56.993l16.741 28.924-55.01 95.043m27.896 74.47l27.114-46.848-50.59-87.406M88.565 18.483l39.03 67.434-70.997 122.666 64.441 111.339m-46.054-20.445l52.61-90.895L56.598 85.917l41.716-72.073M149.435.983l49.159 84.934-70.998 122.666 65.97 113.979m-60.944.002l65.972-113.981-70.998-122.666L176.753.987m51.125 12.859l41.714 72.07-70.998 122.666 52.61 90.896m-46.056 20.443l64.443-111.339-70.997-122.665 39.032-67.438m82.557 102.695l-50.591 87.408 27.113 46.845M286.332 56.994l-16.74 28.923 55.01 95.041M80.314 44.94V27.5l-1.891-3.31m-33.608 82.083v-17.44L32.157 66.667M9.316 167.606v-17.439l-6.85-11.997m42.349 90.769V211.5l-23.712-41.521-16.819 29.48m76.03 90.813v-17.439l-23.712-41.521-19.52 34.214m67.548 49.057l-12.528-21.938-7.26 12.725m96.399 19.041L163.1 292.644l-18.128 31.773m96.385-19.061l-7.26-12.712-12.511 21.927m-70.313-24.299v-17.439l-23.712-41.521-23.722 41.578v17.383m118.472-.001v-17.439l-23.712-41.521-23.722 41.578v17.383m114.247-24.769l-19.527-34.193-23.722 41.578v17.383m-130.062-61.333V211.5l-23.712-41.521-23.721 41.577v17.383m118.432 0V211.5L163.1 169.978l-23.722 41.578v17.383m118.432 0V211.5l-23.712-41.521-23.722 41.578v17.383m111.225-30.06l-16.505-28.902-23.722 41.578v17.383m-201.06-61.333v-17.439l-23.712-41.521-23.722 41.578v17.383m118.393-.001v-17.439l-23.712-41.521-23.722 41.578v17.383m118.472-.001v-17.439l-23.712-41.521-23.722 41.578v17.383m118.432-.001v-17.439l-23.712-41.521-23.722 41.578v17.383m77.853-29.399l-6.854 12.015v17.383m-201.061-61.333v-17.44L92.102 47.312 68.38 88.89v17.383m118.432 0v-17.44L163.1 47.312 139.378 88.89v17.383m118.432 0v-17.44l-23.712-41.521-23.722 41.578v17.383m83.67-39.593l-12.672 22.21v17.383M151.313 44.94V27.5l-14.28-25.007m-21.748 5.072l-11.406 19.992V44.94m118.432 0V27.5L210.923 7.561m-21.752-5.06l-14.294 25.056V44.94m72.91-20.734l-1.912 3.352V44.94M68.419 30.831v34.662m-23.643 0V51.53M32.92 126.826V91.892l-8.157-14.28M9.277 126.826v-16.452M32.92 249.492v-34.934l-11.819-20.693-11.824 20.722v.872m59.142 79.515v-19.083L56.6 255.198l-11.248 19.714m122.821 50.505l-5.076-8.886-5.07 8.886m-18.61-14.592v-34.934l-11.819-20.693-11.823 20.723v34.904m94.64 0v-34.934l-11.819-20.693-11.823 20.723v34.904m94.076-35.922l-11.255-19.705-11.823 20.723v19.081m-153.853-45.51v-34.934l-11.819-20.693-11.823 20.723v34.904m94.64 0v-34.934l-11.819-20.693-11.823 20.723v34.904m94.64 0v-34.934l-11.819-20.693-11.823 20.723v34.904m94.64-34.033v-.901l-11.819-20.693-11.823 20.723v34.904M68.419 188.159v-34.934L56.6 132.532l-11.823 20.723v34.904m94.601 0v-34.934l-11.819-20.693-11.823 20.723v34.904m94.679 0v-34.934l-11.819-20.693-11.823 20.723v34.904m94.64 0v-34.934l-11.819-20.693-11.823 20.723v34.904m-153.853-61.333V91.892L92.099 71.199 80.275 91.921v34.904m94.641.001V91.892l-11.819-20.693-11.823 20.723v34.904m94.64 0V91.892l-11.819-20.693-11.823 20.723v34.904m94.64-16.566v16.565m-15.479-49.209l-8.163 14.306v34.904M139.417 65.493V30.559L127.598 9.866l-11.823 20.723v34.904m94.64 0V30.559L198.596 9.866l-11.823 20.723v34.904m94.64-14.005v14.005m-23.642 0V30.858M56.598 40.175v45.741m-35.499 5.159v56.051m0 66.613v28.025m35.499 33.303v10.592m70.998-10.592v46.451m70.998-46.451v46.461m70.998-46.461v10.59M92.097 213.739v56.051m70.998-56.051v56.051m70.998-56.051v56.051m70.998-56.051v28.254M56.598 152.407v56.051m70.998-56.051v56.051m70.998-56.051v56.051m70.998-56.051v56.051M92.097 91.075v56.051m70.998-56.051v56.051m70.998-56.051v56.051m70.998-56.051v56.051M127.596 29.866v56.051m35.499-85.5v24.167m35.499 5.282v56.051m70.998-45.742v45.741"
                        />
                      </svg>
                    </div>
                    <div
                      class="vc_row wpb_row vc_row-fluid vc_custom_1577721767438 eltdf-content-aligment-center"
                      style={{ backgroundColor: '#0f1d22' }}
                    >
                      <div class="wpb_column vc_column_container vc_col-sm-12">
                        <div class="vc_column-inner">
                          <div class="wpb_wrapper">
                            <a
                              itemprop="url"
                              href="https://laurent.qodeinteractive.com/our-menu/"
                              target="_self"
                              class="eltdf-btn eltdf-btn-medium eltdf-btn-outline"
                            >
                              <span class="eltdf-btn-text">View All</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="eltdf-row-grid-section-wrapper">
                      <div class="eltdf-row-grid-section">
                        <div class="vc_row wpb_row vc_row-fluid vc_custom_1577721744350">
                          <div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-7 vc_col-md-12">
                            <div class="vc_column-inner">
                              <div class="wpb_wrapper">
                                <div class="eltdf-elements-holder eltdf-two-columns eltdf-responsive-mode-680 fifty-fifty">
                                  <div
                                    class="eltdf-eh-item"
                                    data-item-class="eltdf-eh-custom-1215"
                                    data-1400-1600="0 23px 0 0"
                                    data-1025-1399="0 23px 0 0"
                                    data-680="0 0 50px 0"
                                  >
                                    <div class="eltdf-eh-item-inner">
                                      <div
                                        class="eltdf-eh-item-content eltdf-eh-custom-1215"
                                        style={{ padding: '0 27px 0 0' }}
                                      >
                                        <div class="eltdf-single-image-holder eltdf-image-appear-from-top">
                                          <div class="eltdf-si-inner">
                                            <img
                                              width="800"
                                              height="1275"
                                              src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-6.jpg"
                                              class="attachment-full size-full"
                                              alt="g"
                                              loading="lazy"
                                              srcset="
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-6.jpg          800w,
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-6-600x956.jpg  600w,
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-6-188x300.jpg  188w,
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-6-768x1224.jpg 768w,
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-6-643x1024.jpg 643w
                                                "
                                              sizes="(max-width: 800px) 100vw, 800px"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="eltdf-eh-item"
                                    data-item-class="eltdf-eh-custom-1844"
                                    data-1400-1600="0 0 0 23px"
                                    data-1025-1399="0 0 0 23px"
                                    data-680="0 0"
                                  >
                                    <div class="eltdf-eh-item-inner">
                                      <div
                                        class="eltdf-eh-item-content eltdf-eh-custom-1844"
                                        style={{ padding: '0 0 0 27px' }}
                                      >
                                        <div class="eltdf-single-image-holder eltdf-main-home-delayed-image eltdf-image-appear-from-top">
                                          <div class="eltdf-si-inner">
                                            <img
                                              width="800"
                                              height="1275"
                                              src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-8.jpg"
                                              class="attachment-full size-full"
                                              alt="h"
                                              loading="lazy"
                                              srcset="
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-8.jpg          800w,
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-8-600x956.jpg  600w,
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-8-188x300.jpg  188w,
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-8-768x1224.jpg 768w,
                                                  https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-8-643x1024.jpg 643w
                                                "
                                              sizes="(max-width: 800px) 100vw, 800px"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-5 vc_col-md-12">
                            <div class="vc_column-inner">
                              <div class="wpb_wrapper">
                                <div class="eltdf-elements-holder eltdf-one-column eltdf-responsive-mode-768">
                                  <div
                                    class="eltdf-eh-item"
                                    data-item-class="eltdf-eh-custom-2495"
                                    data-1400-1600="13% 0% 0 9%"
                                    data-1025-1399="9% 0% 0 5%"
                                    data-769-1024="80px 11% 0 11%"
                                    data-681-768="80px 0 0 0"
                                    data-680="80px 0 0 0"
                                  >
                                    <div class="eltdf-eh-item-inner">
                                      <div
                                        class="eltdf-eh-item-content eltdf-eh-custom-2495"
                                        style={{ padding: '20% 11% 0 11%' }}
                                      >
                                        <div
                                          class="eltdf-section-title-holder eltdf-st-decor-animation"
                                          style={{ textAlign: 'center' }}
                                        >
                                          <div class="eltdf-st-inner">
                                            <span class="eltdf-st-tagline">
                                              Our food philosophy
                                            </span>
                                            <div class="eltdf-st-title-holder">
                                              <div class="decor">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="41.125"
                                                  height="9.146"
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke="#9C7C57"
                                                    stroke-miterlimit="10"
                                                    d="M40.881 8.576L20.562.591.244 8.576"
                                                  />
                                                  <path
                                                    fill="none"
                                                    stroke="#9C7C57"
                                                    stroke-miterlimit="10"
                                                    d="M40.881.591L20.562 8.576.243.591"
                                                  />
                                                </svg>
                                              </div>
                                              <h2 class="eltdf-st-title">
                                                Our tips
                                              </h2>
                                              <div class="decor">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="41.125"
                                                  height="9.146"
                                                >
                                                  <path
                                                    fill="none"
                                                    stroke="#9C7C57"
                                                    stroke-miterlimit="10"
                                                    d="M40.881 8.576L20.562.591.244 8.576"
                                                  />
                                                  <path
                                                    fill="none"
                                                    stroke="#9C7C57"
                                                    stroke-miterlimit="10"
                                                    d="M40.881.591L20.562 8.576.243.591"
                                                  />
                                                </svg>
                                              </div>
                                            </div>
                                            <p class="eltdf-st-text">
                                              Lorem ipsum dolor sit amet,
                                              consectet nei ad icing eli sed do
                                              eiu sm od tempor se incidid sens
                                              ne utabor et dolore magiqua. Ut
                                              enim ad miains eniam quis
                                              nostrudas exercitation ullam de cm
                                              laborisnw si utali
                                            </p>
                                            <div class="eltdf-st-button">
                                              <a
                                                itemprop="url"
                                                href="https://laurent.qodeinteractive.com/our-kitchen/"
                                                target="_self"
                                                style={{ margin: '35px 0 0' }}
                                                class="eltdf-btn eltdf-btn-medium eltdf-btn-simple"
                                              >
                                                <span class="eltdf-btn-text">
                                                  Read More
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-parallax-bg-image="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/main-background-5.jpg"
                      data-parallax-bg-speed="1"
                      class="vc_row wpb_row vc_row-fluid vc_custom_1574159245515 eltdf-parallax-row-holder eltdf-content-aligment-center"
                    >
                      <div class="wpb_column vc_column_container vc_col-sm-12">
                        <div class="vc_column-inner">
                          <div class="wpb_wrapper">
                            <div class="eltdf-video-button-holder">
                              <div class="eltdf-video-button-image"></div>
                              <a
                                class="eltdf-video-button-play"
                                href="https://vimeo.com/369245407"
                                data-rel="prettyPhoto[video_button_pretty_photo_339]"
                              >
                                <span class="eltdf-video-button-play-inner">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      width="97.094px"
                                      height="97.094px"
                                      viewBox="0 0 97.094 97.094"
                                      enable-background="new 0 0 97.094 97.094"
                                      xmlSpace="preserve"
                                    >
                                      <circle
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-miterlimit="10"
                                        cx="48.558"
                                        cy="48.548"
                                        r="48"
                                      />
                                      <circle
                                        fill="none"
                                        class="eltdf-popout"
                                        stroke="none"
                                        stroke-miterlimit="10"
                                        cx="48.558"
                                        cy="48.548"
                                        r="41.037"
                                      />
                                      <polygon
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-miterlimit="10"
                                        points="42.578,69.964 42.578,27.13 63.994,48.546 "
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="vc_row wpb_row vc_row-fluid vc_custom_1573549706260 eltdf-content-aligment-center">
                      <div class="wpb_column vc_column_container vc_col-sm-12">
                        <div class="vc_column-inner">
                          <div class="wpb_wrapper">
                            <div
                              class="eltdf-section-title-holder eltdf-st-decor-animation"
                              style={{ textAlign: 'center' }}
                            >
                              <div class="eltdf-st-inner">
                                <span class="eltdf-st-tagline">
                                  Laurent’s tasty offer
                                </span>
                                <div class="eltdf-st-title-holder">
                                  <div class="decor">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="41.125"
                                      height="9.146"
                                    >
                                      <path
                                        fill="none"
                                        stroke="#9C7C57"
                                        stroke-miterlimit="10"
                                        d="M40.881 8.576L20.562.591.244 8.576"
                                      />
                                      <path
                                        fill="none"
                                        stroke="#9C7C57"
                                        stroke-miterlimit="10"
                                        d="M40.881.591L20.562 8.576.243.591"
                                      />
                                    </svg>
                                  </div>
                                  <h1 class="eltdf-st-title">Our Menu</h1>
                                  <div class="decor">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="41.125"
                                      height="9.146"
                                    >
                                      <path
                                        fill="none"
                                        stroke="#9C7C57"
                                        stroke-miterlimit="10"
                                        d="M40.881 8.576L20.562.591.244 8.576"
                                      />
                                      <path
                                        fill="none"
                                        stroke="#9C7C57"
                                        stroke-miterlimit="10"
                                        d="M40.881.591L20.562 8.576.243.591"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="eltdf-row-grid-section-wrapper eltdf-content-aligment-center">
                      <div class="eltdf-row-grid-section">
                        <div class="vc_row wpb_row vc_row-fluid vc_custom_1573574980934">
                          <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner">
                              <div class="wpb_wrapper">
                                <div
                                  class="eltdf-portfolio-list-holder eltdf-grid-list eltdf-pl-gallery eltdf-three-columns eltdf-medium-space eltdf-disable-bottom-space eltdf-pl-standard-overlay eltdf-pl-pag-no-pagination eltdf-pl-has-animation"
                                  data-type="gallery"
                                  data-number-of-columns="three"
                                  data-space-between-items="medium"
                                  data-number-of-items="3"
                                  data-image-proportions="full"
                                  data-enable-fixed-proportions="no"
                                  data-enable-image-shadow="no"
                                  data-category="specialties"
                                  data-orderby="date"
                                  data-order="ASC"
                                  data-item-style="standard-overlay"
                                  data-enable-title="yes"
                                  data-title-tag="h5"
                                  data-enable-category="yes"
                                  data-enable-count-images="yes"
                                  data-enable-excerpt="no"
                                  data-excerpt-length="20"
                                  data-pagination-type="no-pagination"
                                  data-filter="no"
                                  data-filter-order-by="name"
                                  data-enable-article-animation="yes"
                                  data-portfolio-slider-on="no"
                                  data-enable-loop="yes"
                                  data-enable-autoplay="yes"
                                  data-slider-speed="5000"
                                  data-slider-speed-animation="600"
                                  data-enable-navigation="yes"
                                  data-enable-pagination="yes"
                                  data-max-num-pages="1"
                                  data-next-page="2"
                                >
                                  <div class="eltdf-pl-inner eltdf-outer-space clearfix">
                                    <article class="eltdf-pl-item eltdf-item-space post-942 portfolio-item type-portfolio-item status-publish has-post-thumbnail hentry portfolio-category-specialties portfolio-tag-recipes portfolio-tag-sweet portfolio-tag-tasty">
                                      <div class="eltdf-pl-item-inner">
                                        <div class="eltdf-pli-image">
                                          <img
                                            width="800"
                                            height="1217"
                                            src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-1.jpg"
                                            class="attachment-full size-full wp-post-image"
                                            alt="d"
                                            loading="lazy"
                                            srcset="
                                                https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-1.jpg          800w,
                                                https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-1-600x913.jpg  600w,
                                                https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-1-197x300.jpg  197w,
                                                https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-1-768x1168.jpg 768w,
                                                https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-1-673x1024.jpg 673w
                                              "
                                            sizes="(max-width: 800px) 100vw, 800px"
                                          />
                                          <div class="eltdf-pli-image-shader-overlay">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              x="0px"
                                              y="0px"
                                              width="47.994px"
                                              height="47.994px"
                                              viewBox="0 0 47.994 47.994"
                                              enable-background="new 0 0 47.994 47.994"
                                              xmlSpace="preserve"
                                            >
                                              <line
                                                fill="none"
                                                stroke="#715B3E"
                                                stroke-miterlimit="10"
                                                x1="21.044"
                                                y1="3"
                                                x2="21.044"
                                                y2="47.994"
                                              />
                                              <line
                                                fill="none"
                                                stroke="#715B3E"
                                                stroke-miterlimit="10"
                                                x1="27.044"
                                                y1="0"
                                                x2="27.044"
                                                y2="44.994"
                                              />
                                              <line
                                                fill="none"
                                                stroke="#715B3E"
                                                stroke-miterlimit="10"
                                                x1="44.994"
                                                y1="21.484"
                                                x2="0"
                                                y2="21.484"
                                              />
                                              <line
                                                fill="none"
                                                stroke="#715B3E"
                                                stroke-miterlimit="10"
                                                x1="47.994"
                                                y1="26.5"
                                                x2="3"
                                                y2="26.5"
                                              />
                                            </svg>
                                          </div>
                                        </div>
                                        <div class="eltdf-pli-text-holder">
                                          <div class="eltdf-pli-text-wrapper">
                                            <div class="eltdf-pli-text">
                                              <h5
                                                itemprop="name"
                                                class="eltdf-pli-title entry-title"
                                              >
                                                Starters
                                              </h5>
                                              <div class="eltdf-pli-category-holder">
                                                <a
                                                  itemprop="url"
                                                  class="eltdf-pli-category"
                                                  href="https://laurent.qodeinteractive.com/portfolio-category/specialties/"
                                                >
                                                  Specialties
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <a
                                          itemprop="url"
                                          class="eltdf-pli-link eltdf-block-drag-link"
                                          href="https://laurent.qodeinteractive.com/portfolio-item/starters/"
                                          target="_self"
                                        ></a>
                                      </div>
                                    </article>
                                    <article class="eltdf-pl-item eltdf-item-space post-943 portfolio-item type-portfolio-item status-publish has-post-thumbnail hentry portfolio-category-specialties portfolio-tag-sweet portfolio-tag-tasty">
                                      <div class="eltdf-pl-item-inner">
                                        <div class="eltdf-pli-image">
                                          <img
                                            width="800"
                                            height="1217"
                                            src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-2.jpg"
                                            class="attachment-full size-full wp-post-image"
                                            alt="j"
                                            loading="lazy"
                                            srcset="
                                                https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-2.jpg          800w,
                                                https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-2-600x913.jpg  600w,
                                                https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-2-197x300.jpg  197w,
                                                https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-2-768x1168.jpg 768w,
                                                https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-2-673x1024.jpg 673w
                                              "
                                            sizes="(max-width: 800px) 100vw, 800px"
                                          />
                                          <div class="eltdf-pli-image-shader-overlay">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              x="0px"
                                              y="0px"
                                              width="47.994px"
                                              height="47.994px"
                                              viewBox="0 0 47.994 47.994"
                                              enable-background="new 0 0 47.994 47.994"
                                              xmlSpace="preserve"
                                            >
                                              <line
                                                fill="none"
                                                stroke="#715B3E"
                                                stroke-miterlimit="10"
                                                x1="21.044"
                                                y1="3"
                                                x2="21.044"
                                                y2="47.994"
                                              />
                                              <line
                                                fill="none"
                                                stroke="#715B3E"
                                                stroke-miterlimit="10"
                                                x1="27.044"
                                                y1="0"
                                                x2="27.044"
                                                y2="44.994"
                                              />
                                              <line
                                                fill="none"
                                                stroke="#715B3E"
                                                stroke-miterlimit="10"
                                                x1="44.994"
                                                y1="21.484"
                                                x2="0"
                                                y2="21.484"
                                              />
                                              <line
                                                fill="none"
                                                stroke="#715B3E"
                                                stroke-miterlimit="10"
                                                x1="47.994"
                                                y1="26.5"
                                                x2="3"
                                                y2="26.5"
                                              />
                                            </svg>
                                          </div>
                                        </div>
                                        <div class="eltdf-pli-text-holder">
                                          <div class="eltdf-pli-text-wrapper">
                                            <div class="eltdf-pli-text">
                                              <h5
                                                itemprop="name"
                                                class="eltdf-pli-title entry-title"
                                              >
                                                Main Courses
                                              </h5>
                                              <div class="eltdf-pli-category-holder">
                                                <a
                                                  itemprop="url"
                                                  class="eltdf-pli-category"
                                                  href="https://laurent.qodeinteractive.com/portfolio-category/specialties/"
                                                >
                                                  Specialties
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <a
                                          itemprop="url"
                                          class="eltdf-pli-link eltdf-block-drag-link"
                                          href="https://laurent.qodeinteractive.com/portfolio-item/main-courses/"
                                          target="_self"
                                        ></a>
                                      </div>
                                    </article>
                                    <article class="eltdf-pl-item eltdf-item-space post-944 portfolio-item type-portfolio-item status-publish has-post-thumbnail hentry portfolio-category-specialties portfolio-tag-recipes portfolio-tag-sweet portfolio-tag-tasty">
                                      <div class="eltdf-pl-item-inner">
                                        <div class="eltdf-pli-image">
                                          <img
                                            width="800"
                                            height="1217"
                                            src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-3.jpg"
                                            class="attachment-full size-full wp-post-image"
                                            alt="s"
                                            loading="lazy"
                                            srcset="
                                                https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-3.jpg          800w,
                                                https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-3-600x913.jpg  600w,
                                                https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-3-197x300.jpg  197w,
                                                https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-3-768x1168.jpg 768w,
                                                https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-3-673x1024.jpg 673w
                                              "
                                            sizes="(max-width: 800px) 100vw, 800px"
                                          />
                                          <div class="eltdf-pli-image-shader-overlay">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              x="0px"
                                              y="0px"
                                              width="47.994px"
                                              height="47.994px"
                                              viewBox="0 0 47.994 47.994"
                                              enable-background="new 0 0 47.994 47.994"
                                              xmlSpace="preserve"
                                            >
                                              <line
                                                fill="none"
                                                stroke="#715B3E"
                                                stroke-miterlimit="10"
                                                x1="21.044"
                                                y1="3"
                                                x2="21.044"
                                                y2="47.994"
                                              />
                                              <line
                                                fill="none"
                                                stroke="#715B3E"
                                                stroke-miterlimit="10"
                                                x1="27.044"
                                                y1="0"
                                                x2="27.044"
                                                y2="44.994"
                                              />
                                              <line
                                                fill="none"
                                                stroke="#715B3E"
                                                stroke-miterlimit="10"
                                                x1="44.994"
                                                y1="21.484"
                                                x2="0"
                                                y2="21.484"
                                              />
                                              <line
                                                fill="none"
                                                stroke="#715B3E"
                                                stroke-miterlimit="10"
                                                x1="47.994"
                                                y1="26.5"
                                                x2="3"
                                                y2="26.5"
                                              />
                                            </svg>
                                          </div>
                                        </div>
                                        <div class="eltdf-pli-text-holder">
                                          <div class="eltdf-pli-text-wrapper">
                                            <div class="eltdf-pli-text">
                                              <h5
                                                itemprop="name"
                                                class="eltdf-pli-title entry-title"
                                              >
                                                Desserts
                                              </h5>
                                              <div class="eltdf-pli-category-holder">
                                                <a
                                                  itemprop="url"
                                                  class="eltdf-pli-category"
                                                  href="https://laurent.qodeinteractive.com/portfolio-category/specialties/"
                                                >
                                                  Specialties
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <a
                                          itemprop="url"
                                          class="eltdf-pli-link eltdf-block-drag-link"
                                          href="https://laurent.qodeinteractive.com/portfolio-item/desserts/"
                                          target="_self"
                                        ></a>
                                      </div>
                                    </article>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="eltdf-svg-pattern-holder eltdf-pattern-position-left"
                      style={{ transform: 'translateY(130px)' }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="224.136"
                        height="259.25"
                      >
                        <path
                          fill="none"
                          stroke="#9A7D57"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          d="M59.649 23.735L-.405 58.472m0 0l61.352 35.511 59.834-34.631m61.557 104.892L60.946 93.982-.412 129.466m0 .001l61.358 35.514 120.965-70.015m-60.704 104.893L60.946 164.98-.406 200.467m.001.001l60.48 35.007M-.408 45.049L38.218 22.99-.408.938m-.003 115.07l38.629-22.059L-.403 71.913m-.003 115.129l38.624-22.056-38.621-22.035m-.008 115.132l38.629-22.099-38.621-22.035M40.591 82.201H58.03l41.521-23.713-41.577-23.72H40.591m0 118.431H58.03l41.521-23.713-41.578-23.721H40.591m0 118.432H58.03l41.521-23.713-41.578-23.721H40.591m61.332-59.103h17.439l41.521-23.711-41.578-23.723h-17.383m.001 118.471h17.439l41.521-23.711-41.578-23.723h-17.383m61.335 11.936h17.439l41.521-23.713-41.578-23.721h-17.383M-.406 31.404l14.737-8.418-14.739-8.41m.003 87.826l14.736-8.418-14.742-8.411m-.001 87.83l14.743-8.421-14.742-8.41m.008 87.824l14.734-8.416-14.742-8.411M20.038 70.305h34.934l20.693-11.818-20.723-11.825H20.038m0 94.641h34.934l20.693-11.818-20.723-11.825H20.038m0 94.641h34.934l20.693-11.818-20.723-11.824H20.038m61.332-82.893h34.934l20.693-11.82-20.723-11.822H81.37m0 94.679h34.934l20.693-11.82-20.723-11.822H81.37m61.334-11.858h34.934l20.693-11.818-20.723-11.824h-34.904M55.79 58.484H-.261m56.051 70.998H-.261M55.79 200.48H-.261M117.122 93.982H61.071m56.051 70.998H61.071m117.383-35.498h-56.051"
                        />
                      </svg>
                    </div>
                    <div
                      class="eltdf-row-grid-section-wrapper eltdf-content-aligment-left"
                      style={{ backgroundColor: '#111d22' }}
                    >
                      <div class="eltdf-row-grid-section">
                        <div class="vc_row wpb_row vc_row-fluid vc_custom_1577182567213 vc_row-has-fill">
                          <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner">
                              <div class="wpb_wrapper">
                                <div
                                  class="eltdf-section-title-holder eltdf-st-decor-animation"
                                  style={{ textAlign: 'center' }}
                                >
                                  <div class="eltdf-st-inner">
                                    <span class="eltdf-st-tagline">
                                      Reservations
                                    </span>
                                    <div class="eltdf-st-title-holder">
                                      <div class="decor">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="41.125"
                                          height="9.146"
                                        >
                                          <path
                                            fill="none"
                                            stroke="#9C7C57"
                                            stroke-miterlimit="10"
                                            d="M40.881 8.576L20.562.591.244 8.576"
                                          />
                                          <path
                                            fill="none"
                                            stroke="#9C7C57"
                                            stroke-miterlimit="10"
                                            d="M40.881.591L20.562 8.576.243.591"
                                          />
                                        </svg>
                                      </div>
                                      <h1 class="eltdf-st-title">
                                        Book a table
                                      </h1>
                                      <div class="decor">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="41.125"
                                          height="9.146"
                                        >
                                          <path
                                            fill="none"
                                            stroke="#9C7C57"
                                            stroke-miterlimit="10"
                                            d="M40.881 8.576L20.562.591.244 8.576"
                                          />
                                          <path
                                            fill="none"
                                            stroke="#9C7C57"
                                            stroke-miterlimit="10"
                                            d="M40.881.591L20.562 8.576.243.591"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="vc_empty_space"
                                  style={{ height: '56px' }}
                                >
                                  <span class="vc_empty_space_inner"></span>
                                </div>
                                <div class="eltdf-elements-holder eltdf-one-column eltdf-responsive-mode-768">
                                  <div
                                    class="eltdf-eh-item"
                                    data-item-class="eltdf-eh-custom-6197"
                                    data-1400-1600="0 6.4%"
                                    data-1025-1399="0 3%"
                                    data-769-1024="0 0 0 8.4%"
                                    data-681-768="0 0 0 8.4%"
                                    data-680="0 0 0 8.4%"
                                  >
                                    <div class="eltdf-eh-item-inner">
                                      <div
                                        class="eltdf-eh-item-content eltdf-eh-custom-6197"
                                        style={{ padding: '0 8.4%' }}
                                      >
                                        <div class="eltdf-rf-holder eltdf-rf-inline">
                                          <form
                                            class="eltdf-rf"
                                            target="_blank"
                                            action="https://www.opentable.com/restaurant-search.aspx"
                                            name="eltdf-rf"
                                          >
                                            <div class="eltdf-rf-row clearfix">
                                              <div class="eltdf-rf-col-holder">
                                                <div class="eltdf-rf-field-holder clearfix">
                                                  <select
                                                    name="partySize"
                                                    class="eltdf-ot-people"
                                                  >
                                                    <option value="1">
                                                      1 Person
                                                    </option>
                                                    <option value="2">
                                                      2 People
                                                    </option>
                                                    <option value="3">
                                                      3 People
                                                    </option>
                                                    <option value="4">
                                                      4 People
                                                    </option>
                                                    <option value="5">
                                                      5 People
                                                    </option>
                                                    <option value="6">
                                                      6 People
                                                    </option>
                                                    <option value="7">
                                                      7 People
                                                    </option>
                                                    <option value="8">
                                                      8 People
                                                    </option>
                                                    <option value="9">
                                                      9 People
                                                    </option>
                                                    <option value="10">
                                                      10 People
                                                    </option>
                                                    <option value="11">
                                                      11 People
                                                    </option>
                                                    <option value="12">
                                                      12 People
                                                    </option>
                                                    <option value="13">
                                                      13 People
                                                    </option>
                                                    <option value="14">
                                                      14 People
                                                    </option>
                                                    <option value="15">
                                                      15 People
                                                    </option>
                                                    <option value="16">
                                                      16 People
                                                    </option>
                                                    <option value="17">
                                                      17 People
                                                    </option>
                                                    <option value="18">
                                                      18 People
                                                    </option>
                                                    <option value="19">
                                                      19 People
                                                    </option>
                                                    <option value="20">
                                                      20 People
                                                    </option>
                                                  </select>
                                                </div>
                                              </div>
                                              <div class="eltdf-rf-col-holder">
                                                <div class="eltdf-rf-field-holder eltdf-rf-date-col clearfix">
                                                  <input
                                                    type="text"
                                                    value="04/08/2021"
                                                    class="eltdf-ot-date"
                                                    name="startDate"
                                                  />
                                                </div>
                                              </div>
                                              <div class="eltdf-rf-col-holder eltdf-rf-time-col">
                                                <div class="eltdf-rf-field-holder clearfix">
                                                  <select
                                                    name="ResTime"
                                                    class="eltdf-ot-time"
                                                  >
                                                    <option value="6:30am">
                                                      6:30 am
                                                    </option>
                                                    <option value="7:00am">
                                                      7:00 am
                                                    </option>
                                                    <option value="7:30am">
                                                      7:30 am
                                                    </option>
                                                    <option value="8:00am">
                                                      8:00 am
                                                    </option>
                                                    <option value="8:30am">
                                                      8:30 am
                                                    </option>
                                                    <option value="9:00am">
                                                      9:00 am
                                                    </option>
                                                    <option value="9:30am">
                                                      9:30 am
                                                    </option>
                                                    <option value="10:00am">
                                                      10:00 am
                                                    </option>
                                                    <option value="10:30am">
                                                      10:30 am
                                                    </option>
                                                    <option value="11:00am">
                                                      11:00 am
                                                    </option>
                                                    <option value="11:30am">
                                                      11:30 am
                                                    </option>
                                                    <option value="12:00pm">
                                                      12:00 pm
                                                    </option>
                                                    <option value="12:30pm">
                                                      12:30 pm
                                                    </option>
                                                    <option value="1:00pm">
                                                      1:00 pm
                                                    </option>
                                                    <option value="1:30pm">
                                                      1:30 pm
                                                    </option>
                                                    <option value="2:00pm">
                                                      2:00 pm
                                                    </option>
                                                    <option value="2:30pm">
                                                      2:30 pm
                                                    </option>
                                                    <option value="3:00pm">
                                                      3:00 pm
                                                    </option>
                                                    <option value="3:30pm">
                                                      3:30 pm
                                                    </option>
                                                    <option value="4:00pm">
                                                      4:00 pm
                                                    </option>
                                                    <option value="4:30pm">
                                                      4:30 pm
                                                    </option>
                                                    <option value="5:00pm">
                                                      5:00 pm
                                                    </option>
                                                    <option value="5:30pm">
                                                      5:30 pm
                                                    </option>
                                                    <option value="6:00pm">
                                                      6:00 pm
                                                    </option>
                                                    <option value="6:30pm">
                                                      6:30 pm
                                                    </option>
                                                    <option
                                                      value="7:00pm"
                                                      selected="selected"
                                                    >
                                                      7:00 pm
                                                    </option>
                                                    <option value="7:30pm">
                                                      7:30 pm
                                                    </option>
                                                    <option value="8:00pm">
                                                      8:00 pm
                                                    </option>
                                                    <option value="8:30pm">
                                                      8:30 pm
                                                    </option>
                                                    <option value="9:00pm">
                                                      9:00 pm
                                                    </option>
                                                    <option value="9:30pm">
                                                      9:30 pm
                                                    </option>
                                                    <option value="10:00pm">
                                                      10:00 pm
                                                    </option>
                                                    <option value="10:30pm">
                                                      10:30 pm
                                                    </option>
                                                    <option value="11:00pm">
                                                      11:00 pm
                                                    </option>
                                                    <option value="11:30pm">
                                                      11:30 pm
                                                    </option>
                                                  </select>
                                                </div>
                                              </div>
                                              <div class="eltdf-rf-col-holder eltdf-rf-btn-holder">
                                                <button
                                                  type="submit"
                                                  class="eltdf-btn eltdf-btn-huge eltdf-btn-outline"
                                                >
                                                  <span class="eltdf-btn-text">
                                                    Book Now
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                            <input
                                              type="hidden"
                                              name="RestaurantID"
                                              class="RestaurantID"
                                              value="161697"
                                            />
                                            <input
                                              type="hidden"
                                              name="rid"
                                              class="rid"
                                              value="161697"
                                            />
                                            <input
                                              type="hidden"
                                              name="GeoID"
                                              class="GeoID"
                                              value="15"
                                            />
                                            <input
                                              type="hidden"
                                              name="txtDateFormat"
                                              class="txtDateFormat"
                                              value="MM/dd/yyyy"
                                            />
                                            <input
                                              type="hidden"
                                              name="RestaurantReferralID"
                                              class="RestaurantReferralID"
                                              value="161697"
                                            />
                                          </form>
                                          <p class="eltdf-rf-copyright">
                                            *Powered by OpenTable
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Main

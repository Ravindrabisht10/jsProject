if (!window.dfc) {
  window.dfc = {
    async safe(fn) {
      while (!window.dfc || !window.dfc.promises) {
        await new Promise(window.requestAnimationFrame);
      }
      return fn();
    },
  };

}

dfc.safe(async () => {
  const $ = await dfc.promises.jQuery;
  
  function waitForFotorama( trigger ){
    let interval = setInterval( () => {
      if( typeof jQuery.fn.fotorama != 'undefined' ){
        clearInterval(interval);
        trigger();
      }
    }, 50)
    setTimeout( () => {
      clearInterval(interval)
    }, 15000)
  }

  // if (!$('.PerksSection').length) return dfc.log('not on product page');
  // const expIdx = window.dfc('dev');
  // if (expIdx === 0) return;

    // dfc.addStyle(`
    // `);


   const test = `<input type="hidden" id="img_no" value="0">
   <div id="fotorama" data-nav="thumbs">
     <img src="http://s.fotorama.io/1.jpg">
     <img src="http://s.fotorama.io/2.jpg">
   </div>`;

   //product slides data
   var sliderData = [
    {
        "Product SKU": "ESU781I0080",
        "p_Name": "Philips 3200 LatteGo Superautomatic Espresso Machine",
        "prod_id": "first_prod",
        "Amazon URL": "https://www.amazon.com/Philips-Automatic-Espresso-Machine-LatteGo/dp/B07VFY4MXM/ref=sr_1_1_sspa?dchild=1&keywords=Philips+3200+LatteGo+Superautomatic+Espresso+Machine&qid=1630096966&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyQzdTVjNVRU40WllIJmVuY3J5cHRlZElkPUExMDQzNTYxMUJBTlVETTQ2N1I2MSZlbmNyeXB0ZWRBZElkPUEwMzM5MTkzM0owRk1KVFZTUVozRCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
        "prod_url": "https://www.seattlecoffeegear.com/philips-saeco-3200-lattego-superautomatic-espresso-machine"
    },
    {
        "Product SKU": "ESU781J0200",
        "p_Name": "Philips 4300 LatteGo Superautomatic Espresso Machine",
        "prod_id": "second_prod",
        "Amazon URL": "https://www.amazon.com/Philips-Kitchen-Appliances-EP4347-94/dp/B08SJ7NFY1/ref=sr_1_3?dchild=1&keywords=EP4347%2F94+Philips+4300+LatteGo+Superautomatic+Espresso+Machine&qid=1630097109&sr=8-3",
        "prod_url": "https://www.seattlecoffeegear.com/philips-4300-lattego-superautomatic-espresso-machine"
    },
    {
        "Product SKU": "ESU781I0020",
        "p_Name": "Philips Carina Superautomatic Espresso Machine",
        "prod_id": "third_prod",
        "Amazon URL": "https://www.amazon.com/Carina-Super-Automatic-Programmable-Espresso-Panarello/dp/B07Z2X25SY/ref=sr_1_2?dchild=1&keywords=EP1220%2F04+Philips+Carina+Superautomatic+Espresso+Machine&qid=1630345144&sr=8-2",
        "prod_url": "https://www.seattlecoffeegear.com/philips-carina-superautomatic-espresso-machine"
    },
    {
        "Product SKU": "ESU781I0060",
        "p_Name": "Philips 3200 Superautomatic Espresso Machine",
        "prod_id": "fourth_prod",
        "Amazon URL": "https://www.amazon.com/Philips-Automatic-Espresso-Machine-Frother/dp/B07VDVDHZ9/ref=sr_1_3?dchild=1&keywords=EP3221%2F40%2BPhilips%2B3200%2BSuperautomatic%2BEspresso%2BMachine&qid=1630345193&sr=8-3&th=1",
        "prod_url": "https://www.seattlecoffeegear.com/philips-3200-superautomatic-espresso-machine"
    },
    {
        "Product SKU": "GR11",
        "p_Name": "Baratza Encore Grinder - Black",
        "prod_id": "fifth_prod",
        "Amazon URL": "https://www.amazon.com/Baratza-Encore-Conical-Coffee-Grinder/dp/B084HNY3BG/ref=sr_1_1?dchild=1&keywords=Baratza+Encore+Grinder+-+Black&qid=1630097321&sr=8-1",
        "prod_url": "https://www.seattlecoffeegear.com/baratza-encore-coffee-grinder"
    },
    {
        "Product SKU": "ESE986C0100",
        "p_Name": "Breville Barista Express Espresso Machine",
        "prod_id": "sixth_prod",
        "Amazon URL": "https://www.amazon.com/Breville-BES870XL-Barista-Express-Espresso/dp/B00CH9QWOU/ref=sr_1_2?dchild=1&keywords=Breville+Barista+Express+Espresso+Machine&qid=1630097523&sr=8-2",
        "prod_url": "https://www.seattlecoffeegear.com/breville-barista-express-espresso-machine"
    },
    {
        "Product SKU": "ESE487J0200",
        "p_Name": "Rancilio Silvia Pro Espresso Machine",
        "prod_id": "seventh_prod",
        "Amazon URL": "https://www.amazon.com/Rancilio-Silvia-Espresso-Machine-Stainless/dp/B094YS4962/ref=sr_1_1_sspa?dchild=1&keywords=Rancilio+Silvia+Pro+Espresso+Machine&qid=1630097722&sr=8-1-spons&psc=1&smid=A3ICMBI0G2YNWL&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFLVDM5TEpOVlRZOEYmZW5jcnlwdGVkSWQ9QTA2ODk1MDczOFIyQTFQRUlQREcwJmVuY3J5cHRlZEFkSWQ9QTA1ODUxNjkzSlFVOUJXUjRVNDg1JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
        "prod_url": "https://www.seattlecoffeegear.com/rancilio-silvia-pro-espresso-machine"
    },
    {
        "Product SKU": "ESH986G0040",
        "p_Name": "Breville Oracle Touch Espresso Machine",
        "prod_id": "eighth_prod",
        "Amazon URL": "https://www.amazon.com/Breville-BES990BSSUSC-Automatic-Espresso-Machine/dp/B073TYYM91/ref=sr_1_2?dchild=1&keywords=BES990BSS+Breville+Oracle+Touch+Espresso+Machine&qid=1630097827&sr=8-2",
        "prod_url": "https://www.seattlecoffeegear.com/breville-oracle-touch-espresso-machine"
    },
    {
        "Product SKU": "ESU119H2120",
        "p_Name": "Breville Barista Pro Espresso Machine",
        "prod_id": "ninth_prod",
        "Amazon URL": "https://www.amazon.com/Saeco-SM7684-04-Automatic-Espresso/dp/B07G3XYR3R/ref=sr_1_1_sspa?dchild=1&keywords=SM7684+Saeco+Xelsis+SM7684+Superautomatic+Espresso+Machine&qid=1630097890&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzNVNBSERSOTVCMkUwJmVuY3J5cHRlZElkPUEwMzQ4ODYyMTFaR01QWEFINlRIMyZlbmNyeXB0ZWRBZElkPUEwMzM0NTMzMkFPWFpGSEgzOVJFTSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
        "prod_url": "https://www.seattlecoffeegear.com/saeco-xelsis-superautomatic-espresso-machine"
    },
    {
        "Product SKU": "ESH986H0080",
        "p_Name": "Breville Barista Pro Espresso Machine",
        "prod_id": "tenth_slide",
        "Amazon URL": "https://www.amazon.com/Breville-Barista-Pro-Automatic-Integrated/dp/B08133HX34/ref=sr_1_5?dchild=1&keywords=BES878BSS+Breville+Barista+Pro+Espresso+Machine&qid=1630330171&sr=8-5",
        "prod_url": "https://www.seattlecoffeegear.com/breville-barista-pro-espresso-machine"
    }
   ]  

   var slideContent = {
      "first_prod": {
        "thumb":[
          "f_mainImg_1.jpg",
          "f_mainImg_2.jpg",
          "f_mainImg_3.jpg",
          "f_mainImg_4.jpg",
          "f_mainImg_5.jpg",
          "f_mainImg_6.jpg",
        ],
        "feature": [
          "Enjoy 5 coffees",
          "Intuitive touch display",
          "12-step grinder adjustment",
          "20,000 cups of finest coffee with durable ceramic grinders",
          "Keep your beans fresh for longer thanks to the aroma seal",
          "Up to 5,000 cups without descaling thanks to AquaClean",
          "Dishwasher safe parts for your convenience",
          "Easy cleaning thanks to fully removable brewing group",
          "Makes Espresso, hot water, cappuccino, coffee, latte macchiato and americano",
          "<b>Includes:</b> Measuring scoop, water hardness test strip, AquaClean filter, LatteGo storage lid, grease tube",
        ]
      },
      "second_prod": {
        "thumb":[
          "s_mainImg_1.jpg",
          "s_mainImg_2.jpg",
          "s_mainImg_3.jpg",
          "s_mainImg_4.jpg",
          "s_mainImg_5.jpg",
          "s_mainImg_6.jpg",
          "s_mainImg_7.jpg",
        ],
        "feature": [
          "Enjoy 8 delicious coffees at your fingertips",
          "LatteGo creates silky smooth froth and is our fastest our clean milk system ever",
          "Intuitive TFT display with icons makes it easy to customize the length, strength, and temperature of your coffee",
          "2 user profiles to save your favourite coffee settings",
          "Aroma Extract system provides the perfect temperature, aroma and crema"
        ]
      },
      "third_prod": {
        "thumb":[
          "thir_mainImg_1.jpg",
          "thir_mainImg_2.jpg",
          "thir_mainImg_3.jpg",
          "thir_mainImg_4.jpg",
          "thir_mainImg_5.jpg",
          "thir_mainImg_6.jpg",
          "thir_mainImg_7.jpg",
        ],
        "feature": [
          "Easily make 2 delicious coffee drinks from fresh beans, exactly the way you like it with a touch of a button",
          "The Classic Milk Frother dispenses steam, allowing you to prepare silky smooth milk froth for your cappuccino or latte macchiato - with only two parts, it is also easy to clean",
          "The irresistible taste and aroma of coffee from fresh beans is just one touch away - the intuitive touch display allows you to easily select your favorite coffee",
          "The Aroma Extract system intelligently strikes the optimum balance between brewing temperature and aroma extraction by keeping the water temperature between 194 and 208°F, while regulating the water flow rate, so you can enjoy delicious coffees",
          "The brew group is the heart of every fully automatic coffee machine, and should be cleaned regularly - the removable brew group allows you to clean it thoroughly just by rinsing it under the tap"
        ]
      },
      "fourth_prod": {
        "thumb":[
          "four_mainImg_1.jpg",
          "four_mainImg_2.jpg",
          "four_mainImg_3.jpg",
          "four_mainImg_4.jpg",
          "four_mainImg_5.jpg",
          "four_mainImg_6.jpg",
          "four_mainImg_7.jpg",
        ],
        "feature": [
          "Enjoy 4 coffees at your fingertips, makes espresso, hot water, coffee, Americano, Espresso Lungo",
          "<b>Intuitive touch display, frequency:</b> 60 hertz",
          "Adjust aroma strength and quantity",
          "12-step grinder adjustment",
          "Aroma seal keep your beans fresh for longer",
          "Up to 5,000 cups without descaling thanks to AquaClean",
          "Removable brew group for easy cleaning",
          "Dishwasher safe parts for your convenience",
          "<b>Aroma strength settings:</b> 3",
          "<b>Temperature settings:</b> 3",
        ]
      },
      "fifth_prod": {
        "thumb":[
          "five_mainImg_1.jpg",
          "five_mainImg_2.jpg",
          "five_mainImg_3.jpg",
          "five_mainImg_4.jpg",
          "five_mainImg_5.jpg",
        ],
        "feature": [
          "<b>SPECIALTY COFFEE ASSOCIATION AWARD WINNING GRINDERS -</b> Baratza grinders are preferred by coffee professionals and backed by Baratza’s world class support.",
          "<b>GO-TO ENTRY LEVEL GRINDER -</b> Baratza’s best-selling grinder, with its small footprint, is THE choice for brewing coffee at home. Available in White and Black.",
          "<b>USER FRIENDLY -</b> A convenient, front-mounted pulse button, plus a simple ON/OFF switch make it easy to grind fresh coffee.",
          "<b>40 GRIND SETTINGS -</b> Commercial-grade conical burrs help you explore the extensive range of brew methods (compatible with espresso, aeropress, Hario V60, Chemex, French Press, and automatic brewers).",
          "<b>WARRANTY/QUALITY PARTS -</b> Engineered with 40mm hardened alloy steel burrs manufactured in Liechtenstein, Europe, plus a powerful DC motor. This combination creates a consistent grind and durability to ensure the longevity users have come to expect from the Baratza brand. The Encore is backed by Baratza’s world class support and a 1 year warranty.",
        ]
      },
      "sixth_prod": {
        "thumb":[
          "six_mainImg_1.jpg",
          "six_mainImg_2.jpg",
          "six_mainImg_3.jpg",
          "six_mainImg_4.jpg",
          "six_mainImg_5.jpg",
          "six_mainImg_6.jpg",
        ],
        "feature": [
          "The Breville Barista Express delivers third wave specialty coffee at home using the 4 keys formula and is part of the Barista Series that offers all in one espresso machines with integrated grinder to go from beans to espresso in under one minute",
          "<b>DOSE CONTROL GRINDING:</b> Integrated precision conical burr grinder grinds on demand to deliver the right amount of freshly ground coffee directly into the portafilter for your preferred taste with any roast of bean",
          "<b>OPTIMAL WATER PRESSURE:</b> Low pressure pre-infusion gradually increases pressure at the start and helps ensure all the flavors are drawn out evenly during the extraction for a balanced tasting cup",
          "<b>PRECISE ESPRESSO EXTRACTION:</b> Digital temperature control (PID) delivers water at precisely the right temperature, ensuring optimal espresso extraction",
          "<b>MANUAL MICROFOAM MILK TEXTURING:</b> The powerful steam wand performance allows you to hand texture microfoam milk that enhances flavor and enables creation of latte art",
          "<b>ESPRESSO MACHINE WITH GRIND SIZE DIAL:</b> Simple and intuitive, giving you control over the grind size no matter what type of bean you're grinding",
          "<b>ESPRESSO MAKER WITH BUILT-IN COFFEE GRINDER:</b> Innovative grinding cradle allows any at home barista to grind directly into the espresso portafilter for the perfect espresso",
          "<b>INCLUDED ACCESSORIES:</b> Razor Dose Trimming Tool, 54mm Stainless Steel Portafilter, 1 & 2 cup Single & Dual Wall Filter Baskets, Coffee Scoop, Integrated Tamper, Stainless Steel Milk Jug, Cleaning Disc, Tablets, Brush Tool & Allen Key, Water Filter & Filter Holder",
          "<b>CAPACITY & SETTINGS:</b> 1 by 2 lb Bean Hopper; 67 oz Water Tank; Single or double shots; Adjustable grind amount and Manual override",
          "<b>WARRANTY:</b> 1 Year Limited Product Warranty; Power: 1600 Watts; Voltage: 120 Volts",
        ]
      },
      "seventh_prod": {
        "thumb":[
          "seven_mainImg_1.jpg",
          "seven_mainImg_2.jpg",
          "seven_mainImg_3.jpg",
          "seven_mainImg_4.jpg",
          "seven_mainImg_5.jpg",
          "seven_mainImg_6.jpg",
        ],
        "feature": [
          "<b>Dual Boiler -</b> Electronic control over water and independent regulation of different temperatures for both coffee extraction and steam delivery are easily manageable via the display buttons. Two Proportional-Integral-Derivative (PID) controllers – located in the coffee boiler and the new steam boiler – keep the heat consistent and stable, offering extremely precise temperature stability, shot after shot.",
          "<b>Thermal Stability -</b> The Silvia Pro’s impressive Thermal Stability puts it in the top class of commercial espresso machines, offering extremely precise temperature delivery for espresso.",
          "<b>Powerful Steam -</b> Steam like a Pro with high powered steam delivery: cappuccino, macchiato and all espresso-based milk beverages can be made with ease with luscious foam and creamy steamed milk.",
          "<b>Digital Display -</b> The display presents temperature levels, a shot timer a water level alert and a “wake up” function that can switch on the machine at a pre-set time.",
          "<b>Equipment -</b> High-quality professional build with heavy-duty components: ergonomic portafilter, insulated boilers, multi-directional stainless steel steam wand, cup tray and dedicated coffee boiler. Rancilio commercial components and brewing technology in just 25 cm.",
        ]
      },
      "eighth_prod": {
        "thumb":[
          "eig_mainImg_1.jpg",
          "eig_mainImg_2.jpg",
          "eig_mainImg_3.jpg",
          "eig_mainImg_4.jpg",
          "eig_mainImg_5.jpg",
          "eig_mainImg_6.jpg",
        ],
        "feature": [
          "The Breville Oracle Touch with touch screen delivers third wave specialty coffee at home using the 4 keys formula; It has a professional Dual Boiler construction that delivers unparalleled temperature control and simultaneous extraction and steaming",
          "<b>DOSE CONTROL GRINDING:</b> The integrated precision conical burr grinder automatically grinds, doses and tamps 22 grams of freshly ground coffee, for maximum flavor",
          "<b>OPTIMAL WATER PRESSURE:</b> The Over Pressure Valve limits the maximum pump pressure throughout extraction, helping prevent bitter flavors; Low pressure pre infusion gradually increases water pressure to gently expand grinds for an even extraction",
          "<b>PRECISE ESPRESSO EXTRACTION:</b> Achieve balanced tasting espresso with the Breville Oracle Touch Espresso Machine complete with digital temperature control (PID), delivers water at precisely the right temperature ensuring optimal espresso extraction",
          "<b>UTOMATIC MICROFOAM MILK TEXTURING:</b> Self-cleaning steam wand, powered by a dedicated boiler, automatically textures milk to your liking and delivers barista quality microfoam that enhances flavor and is essential for creating latte art at home",
          "<b>TOUCH SCREEN:</b> With automation at every stage, simply swipe and select for espresso, long black, latte, flat white or cappuccino and enjoy cafe quality coffee at home",
          "<b>PERSONALIZATION:</b> You can easily adjust the coffee strength, milk texture or temperature to suit your taste with one touch, then save it with your own unique name; Create and save up to 8 personalized coffees",
          "<b>INCLUDED ACCESSORIES:</b> Mini Grinds Bin, 58mm Full Stainless Steel Portafilter, 1 and 2 cup Single Wall Filter Baskets, 480ml Stainless Steel Milk Jug, Steam Wand Spare Parts, Cleaning Kit, Water Hardness Test Strip, Water Filter Holder and Water Filter",
          "<b>CAPACITY & SETTINGS:</b> 1/2 lb Bean Hopper; 67 oz Water Tank; Touch Screen Operation with 5 Pre-Programmed Favorites; Create, save, and name 8 customizable settings; Adjustable Grind Control; Programmable Milk Temperature & Texture; One/Two Shots; Hot Water",
          "<b>WARRANTY:</b> 2 Year Limited Product Warranty; Power: 1800 Watts; Voltage: 110 to 120 Volts",
        ]
      },
      "ninth_prod": {
        "thumb":[
          "nin_mainImg_1.jpg",
          "nin_mainImg_2.jpg",
          "nin_mainImg_3.jpg",
          "nin_mainImg_4.jpg",
          "nin_mainImg_5.jpg",
          "nin_mainImg_6.jpg",
        ],
        "feature": [
          "<b>Premier programming -</b> The xelsis lets you program everything. From milk and espresso volume to dose, temperature, and texture only thing holding back your morning drink is you",
          "<b>User profile -</b> And once you have your favorite drinks dialed-in, you can save them to your dedicated profile for easy access",
          "<b>Touchscreen control -</b> The xelsis showcases its programming prowess with an accurate 3.5\" Touchscreen",
          "<b>Hygiesteam system -</b> An upgrade to the steam systems of old, the xelsis Fridge-ready milk carafe packs in texture control and automated purge and clean cycles",
          "<b>Double thermo blocks -</b> Dedicated for both brewing and steaming offer accurate temperature controls for every drink in your recipe book",
          "<b>Refined ergonomics -</b> From a front-access water tank to adjustable spouts and a scratch-resistant drip tray; The xelsis brings the best from Saeco design options",
        ]
      },
      "tenth_prod": {
        "thumb":[
          "ten_mainImg_1.jpg",
          "ten_mainImg_2.jpg",
          "ten_mainImg_3.jpg",
          "ten_mainImg_4.jpg",
          "ten_mainImg_5.jpg",
          "ten_mainImg_6.jpg",
        ],
        "feature": [
          "The Breville Barista Pro delivers third wave specialty coffee at home using the 4 keys formula and is part of the Barista Series that offers all in one espresso machines with integrated grinder to go from beans to espresso in under one minute",
          "<b>DOSE CONTROL GRINDING:</b> With a single touch, the integrated precision conical burr grinder with dose control delivers the right amount of coffee on demand, for maximum flavor",
          "<b>OPTIMAL WATER PRESSURE:</b> Low pressure pre-infusion gradually increases pressure at the start and helps ensure all the flavors are drawn out evenly during the extraction for a balanced tasting cup",
          "<b>FASTER HEAT UP TIME:</b> Innovative ThermoJet heating system achieves the optimum extraction temperature in 3 seconds with the instantaneous transition from espresso to steam",
          "<b>PRECISE ESPRESSO EXTRACTION:</b> Digital temperature control (PID) delivers water at the right temperature plus & minus 2°C, ensuring optimal espresso extraction",
          "<b>MANUAL MICROFOAM MILK TEXTURING:</b> The powerful steam wand performs at the level allows you to hand texture microfoam milk that enhances flavor and enables creation of latte art at home",
          "<b>INTUITIVE INTERFACE:</b> LCD display with grinding and extracting progress animations; The screen provides you all the descriptive information you need to make coffee exactly the way you like it every time",
          "<b>INCLUDED ACCESSORIES:</b> Single & Dual Wall (1 and 2 Cup) Filter Baskets, The Razor Precision Dose Trimming Tool, 480 ml Stainless Steel Milk Jug, Cleaning Kit and Water Filter",
          "<b>CAPACITY & SETTINGS:</b> 1 by 2 lb, Bean Hopper; 67 oz Water Tank; Adjustable Grind Control; Intuitive LCD Interface; 1 or 2 Cup Volumetric Control",
          "<b>WARRANTY:</b> 2 Year Limited Product Warranty; Power: 1680 Watts; Voltage: 120 Volts",
        ]
      },
   }
  
   //slide container
   const slideContainer = `
      <div class="bm-slider-scg-34">
         <div class="bm-fotorama-slider" data-gallery-role="gallery">
         </div>
      </div>
    `

    //product thumbnail image and slider data-nav="thumbs" 
    function productSlider(prodData){
         //insert slider
         $('.media-well .gallery-placeholder').replaceWith(slideContainer);

         //get slide id
         const productID = prodData.prod_id;
         //filter slider data
         const sliderData = slideContent[productID];

         $.each(sliderData.thumb, function(i, item){
           console.log(item);
           var el = `<img src="https://bm-test-dev.s3.us-east-2.amazonaws.com/Digital+Fuel+Capital/SCG-34/mainimg/${item}" alt="slider-image" aria-hidden="false" width="100" height="100"/>`;
           $('.bm-slider-scg-34 .bm-fotorama-slider').append(el);
         })

         $('.bm-fotorama-slider').fotorama({
          maxHeight: '100%',
          maxwidth: '100%',
          nav: 'thumbs',
          transitionDuration: 400,
          loop: true,
          fit: "contain",
          arrows: true, 
          navwidth: "80%",
          thumbwidth: "85px",
          thumbheight: "85px",
          // thumbborderwidth: "100%",
          // caption: true, 
      });
    }

    function init() {
      console.log('work')
     // append new sec
    //  $('.media-well').after(test);

      //filter slider data
      window.location.href;
      const data = sliderData.filter(function(item){
           return window.location.href.indexOf(item.prod_url) > -1;
      });

      data[0] && productSlider(data[0]);

    }

    function addScript() {
        var bmScript = document.createElement('script');
        bmScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.min.js';
        document.getElementsByTagName('head')[0].appendChild(bmScript);

        
        var bmlink = document.createElement('link');
        bmlink.href = "https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.min.css";
        document.getElementsByTagName('head')[0].appendChild(bmlink);
    }
   
    dfc.raf('head', addScript);  

    waitForFotorama( () => {
      console.log('run')
      dfc.raf('.media-well .gallery-placeholder', init);
    })

});

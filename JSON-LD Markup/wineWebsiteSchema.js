// Providing specific info about your sites content Google can help it display in richer features within search results. 


// ***Article markup example***
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",

  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.riversandswines.com/news/surprise-visit-macca"
  },
  "headline": "Surprise visit from Macca!",
  "image": [
    "https://www.riversandswines.com/sites/default/files/uploaded-content/website-content/20190207_114853.jpg",
    "https://www.riversandswines.com/sites/default/files/imagecache/article_thumb/uploaded-content/field_f_content_thumbnail/20190207_115756.jpg",
  
   ],
  "datePublished": "2019-02-09 12:46:16 +1000",
  "dateModified": "2019-02-09 12:46:16 +1000",
  "author": {
    "@type": "Person",
    "name": "Mr David Blacket"
  },
   "publisher": {
    "@type": "Winery",
    "name": "Riversands Wines",
    "logo": {
      "@type": "ImageObject",
      "url": "/sites/all/themes/project-themes/riversands/website/logo.svg"
    }
  },
  "description": "Surprise visit, Australia All Over"
}
</script>



// ***Product markup example****
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "F**'n Good Port (FGP) 2016",
   // a ∩ b = a (https://en.wikipedia.org/wiki/DE-9IM)
  "geospatiallyWithin": "Riversands Wines ∩ Southern Downs Region = Riversands Wines",
  "image": [
    "https://www.riversandswines.com/sites/default/files/imagecache/wine_product_zoomed/uploaded-content/field_f_content_image/fgp_front.png",
    "https://www.riversandswines.com/sites/default/files/imagecache/wine_product_zoomed/uploaded-content/field_f_content_image/p1100329_copy.jpg"
   ],
  "description": "New release. A 2016 vintage port. Also known as St George Dragon Blood Port! The label on this port contains swearing.",
  // riversands wines do not currently use SKUs, other wineries may
  "sku": "0446310786",
  "award": "Bronze Medal 2015 vintage RNA National Wine Show 2017",
  // wine type-varietal 
  "brand": {
    "@type": "Fortified Wines",
    "name": "Cabernet Sauvignon", "Shiraz"
  },

   //If wine region ('geospatiallyWithin') above doesn't work use this method: https://stackoverflow.com/questions/14985194/marking-up-a-bottle-of-wine-with-schema-org-and-good-relations-product
  "additionalType":{
    "wineRegion": "Southern Downs Region"
  }

  // Using external reviewing platform (vivino) for reviews 
  "review": {
    "@type": "Review",
    
    "itemReviewed": {
      "@type": "product",
      "image": "https://www.riversandswines.com/sites/default/files/imagecache/wine_product_zoomed/uploaded-content/field_f_content_image/fgp_front.png",
      "name": "F**'n Good Port (FGP) 2016",
      }
    "author": {
      "@type": "Organisation",
      "name": "https://www.vivino.com/riversands-fucking-good-port/w/1903032"

    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.2",
        "reviewCount": "13"
    }
  },

  // product pricing 
  "offers": {
    "@type": "Offer",
    "url": "https://www.riversandswines.com/wine/fn-good-port-fgp-2016",
    "priceCurrency": "AUD",
    "price": "26.00",
    "areaServed": "Australia",
    "itemCondition": "https://schema.org/NewCondition",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Riversands Wines"
    }
  }
}
</script>



//***Event markup example***
<script type="application/1d+json">

{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Riversands Easter in the Vines 2019",

  //drupal is using a different date format: "20/03/2019, 13:23"

  "startDate": "2019-04-20T09:00",
  "endDate": "2019-04-21T18:00",
  "location": {
    "@type": "Place",
    "name": "Riversands Vineyards",
    "address": {
      "streetAddress": "66 Whytes Rd",
      "addressLocality": "St George",
      "postalCode": "4487",
      "addressRegion": "QLD",
      "addressCountry": "AU"
    }
  },
  "image": [
    "https://www.riversandswines.com/sites/default/files/imagecache/article_full/uploaded-content/field_f_content_image/blacket_family_0.jpg",
    "https://www.riversandswines.com/sites/default/files/uploaded-content/website-content/the_night_of_our_life_cover_art_002.jpg",
    "https://www.riversandswines.com/sites/default/files/uploaded-content/website-content/bbq_with_dr.jpg",
    "https://www.riversandswines.com/sites/default/files/uploaded-content/website-content/copy_of_donna_henry_stewart_and_family_relaxed_with_a_cheese_platter_and_music._1.jpg"
   ],
  "description": "Riversands Easter in the Vines 2019 will feature Melbourne based band the 'Long & Short of It' performing their dynamic brand of contemporary country rock. The event will run Easter Saturday and Sunday with loads of family fun, BBQ lunch packs and games for the kids. You can register for our free event now.",
  "offers": {
    "@type": "Offer",
    "url": "https://www.riversandswines.com/events/riversands-easter-vines-2019",
    "price": "00.00",
    "priceCurrency": "AUD",
    "availability": "https://schema.org/InStock",
    "validUntil": "2019-04-21T18:00"
  },
  "performer": {
    "@type": "PerformingGroup",
    "name": "The Long & Short of It."
  }
}
</script>
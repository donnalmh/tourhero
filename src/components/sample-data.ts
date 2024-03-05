const carouselWidth = 200;
const carouselHeight = 120;
const link  = "https://picsum.photos/"  + carouselWidth + "/"+ carouselHeight + "?q="
export const input = {
    itineraryId: '09781021',
    title: 'Marina Bay Sands Observation',
    description: "A great spot for R&R: order yourself a drink from the bar and get comfortable on one of the day beds that line the impressive 100-metre pool.",
    itineraryDetail: [
        {
            dayNo: 1,
            title: 'See the largest indoor waterfall in the world',
            description: "Just how much mind-boggling can be packed into a 14-day holiday? Well we'll tell you. Our hot adventure park packs a serious punch on a journey to Singapore and Malaysia.",
            sourceImg: [{  id: 1,  url : link + 1  },
                        {  id: 2,  url : link + 2 },
                        {  id: 3, url : link + 3  } ,
                        {  id: 4, url : link + 4  } ,
                        {  id: 5, url : link + 5  }  
                        ]
        },
        {
            dayNo: 2,
            title: 'Two giant conservatories',
            description: "Two giant conservatories rise beside Marina bay like futuristic shells, one home to ancient olive trees, the other to a towering , tropical mountain. To the north are Supertrees: futurists.",
            sourceImg: [{  id: 6,  url : link + 6 },
                        {  id: 7,  url : link + 7 },
                        {  id: 8, url : link + 8  } ,
                        {  id: 9, url : link + 9  } ,
                        {  id: 10, url : link + 10  }  
                        ]

        },
        {
            dayNo: 3,
            title: "Singapore's 21st-century botanical garden",
            description: "Singapore's 21st-century botanical garden is a $1 billion, 101-hectare fantasy land of a space-age biodomes, high-tech Supertrees and whimsical scultures.",
            sourceImg: [{  id: 11,  url : link + 11 },
                        {  id: 12,  url : link + 12 },
                        {  id: 13, url : link + 13  } ,
                        {  id: 14, url : link + 14  } ,
                        {  id: 15, url : link + 15  }  
                        ]
        },
        {
            dayNo: 4,
            title: "Super Park",
            description: "Spanning a whopping 101 hectares, Gardens By the Bay is Singapore's hottest horticultural asset. The $1 billion dollar super park is home to 1.5 million plants, not to mention fauna.",
            sourceImg: [{  id: 16,  url : link + 16 },
                        {  id: 17,  url : link + 17 },
                        {  id: 18, url : link + 18  } ,
                        {  id: 19, url : link + 19 } ,
                        {  id: 20, url : link + 20  }  
                        ]
        }
    ],
    currentPrice: 1300,
    prevPrice: 1699,
    currency: 'USD',
    rating: 4.8,
    numReviews: 23,
    features: [
        {
            title: 'DURATION',
            value: 3
        },
        {
            title: 'COUNTRIES',
            value: 2
        },
        {
            title: 'ACTIVITY LEVEL',
            value: 'Strenuous'
        },
        {
            title: 'LANGUAGE',
            value: 'English'
        },
        {
            title: 'INCLUDES',
            value: 'Food, Hotel, Transport'
        }
    ]
}
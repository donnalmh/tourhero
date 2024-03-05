export interface Feature {
    title: string,
    value: string
}

export interface test{
    teststring: string[]
}

export interface ItineraryDayItem {
    dayNo: 1
    title: string
    description: string
    sourceImg: SourceImage[]
}

export interface SourceImage{
    id: number
    url: string
}

export interface Features {
    list: Feature[]
}

export interface ItineraryProps {
    itineraryId: string
    title: string
    description: string
    itineraryDetail: ItineraryDayItem[]
    currentPrice: number
    prevPrice: number
    currency: string
    rating: number
    numReviews: number
    features: Feature[]
    teststring: string[]
}

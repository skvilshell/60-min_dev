import React from "react"
import ContentLoader from "react-content-loader"

export const CardLarge = (props) => (
   <ContentLoader
      speed={2}
      width={350}
      height={480}
      viewBox="0 0 350 480"
      backgroundColor="#d6d6d6"
      foregroundColor="#e8e8e8"
      {...props}
   >
      <rect x="-1" y="0" rx="20" ry="20" width="350" height="480" />
   </ContentLoader>
)
export const CardMedium = (props) => (
   <ContentLoader
      speed={2}
      width={274}
      height={375}
      viewBox="0 0 274 375"
      backgroundColor="#d6d6d6"
      foregroundColor="#e8e8e8"
      {...props}
   >
      <rect x="0" y="0" rx="20" ry="20" width="274" height="375" />
   </ContentLoader>
)

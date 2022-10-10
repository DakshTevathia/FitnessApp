import React from 'react'
import { Box } from '@mui/material'
import BodyPart from './BodyPart'
import ExerciseCard from "./ExerciseCard"
import { ScrollMenu } from 'react-horizontal-scrolling-menu'

const HorizontalBodyPartsScrollBar = ({ data, bodyPart, setBodyPart, isBodayPart }) => {
    return (
        <ScrollMenu>
            {data.map((singleDataElement) => (
                <Box
                    key={singleDataElement.id || singleDataElement}
                    // itemId={singleDataElement.id || singleDataElement}
                    // title={singleDataElement.id || singleDataElement}
                    m="0 40px">
                    {isBodayPart ?
                        <BodyPart singleDataElement={singleDataElement} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                        :
                        <ExerciseCard exercise={singleDataElement} />
                    }

                </Box>
            ))}
        </ScrollMenu >
    )
}

export default HorizontalBodyPartsScrollBar;
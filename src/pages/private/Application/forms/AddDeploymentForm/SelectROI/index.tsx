import { useEffect, useRef, useState } from "react";
import { Box, Checkbox, Flex, Input, Select, Text } from "@chakra-ui/react";
import { Stage, Layer, Image, Rect, Line } from "react-konva";
import { KonvaEventObject } from "konva/lib/Node";

import { ROI } from "../../../../../../assets";
import { CustomBtn } from "../../../../../../components";

const MAX_ANNOTATIONS = 1;

type Annotation = {
  x: number;
  y: number;
  width: number;
  height: number;
  key: number;
};

const SelectROI = () => {
  const [region, setRegion] = useState<string>("Rectangle");
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [image, setImage] = useState<HTMLImageElement>();
  const imageRef = useRef<HTMLImageElement>(null);
  const [newAnnotation, setNewAnnotation] = useState<Annotation[]>([]);

  const videoElement = useRef(new window.Image());

  const handleMouseDown = (event: KonvaEventObject<MouseEvent>) => {
    // restrict user to max number of annotations
    if (newAnnotation.length === 0 && annotations.length < MAX_ANNOTATIONS) {
      const { x, y } = event.target.getStage().getPointerPosition();
      setNewAnnotation([
        {
          x: x,
          y: y,
          width: 0,
          height: 0,
          key: 0,
        },
      ]);
    }
  };

  const handleMouseMove = (event: KonvaEventObject<MouseEvent>) => {
    if (newAnnotation.length === 1) {
      const sx = newAnnotation[0].x;
      const sy = newAnnotation[0].y;
      const { x, y } = event.target.getStage().getPointerPosition();
      setNewAnnotation([
        {
          x: sx,
          y: sy,
          width: x - sx,
          height: y - sy,
          key: 0,
        },
      ]);
    }
  };

  const handleMouseUp = (event: KonvaEventObject<MouseEvent>) => {
    if (newAnnotation.length === 1) {
      const sx = newAnnotation[0].x;
      const sy = newAnnotation[0].y;
      const { x, y } = event.target.getStage().getPointerPosition();
      const annotationToAdd = {
        x: sx,
        y: sy,
        width: x - sx,
        height: y - sy,
        key: annotations.length + 1,
      };
      annotations.push(annotationToAdd);
      setNewAnnotation([]);
      setAnnotations(annotations);
    }
  };

  const annotationsToDraw = [...annotations, ...newAnnotation];

  useEffect(() => {
    //fetchImage();
    videoElement.current.width = 900;
    videoElement.current.height = 440;
    videoElement.current.src = ROI;

    videoElement.current.addEventListener("load", () => {
      setImage(videoElement.current);
      imageRef.current = videoElement.current;
    });

    return () => {
      videoElement.current.removeEventListener("load", () => {});
    };
  }, []);

  return (
    <Flex className="p-[30px] justify-between">
      <Box className=" w-[50%] flex flex-col gap-y-3 h-[300px]">
        <Flex className="justify-between items-center">
          <Text className=" ">Name</Text>
          <Input width="360px" />
        </Flex>
        <Flex className="justify-between items-center">
          <Text>Region Type</Text>
          <Select
            bg="#F9F9F9"
            borderRadius="4px"
            focusBorderColor="#ABACAC"
            width="360px"
            defaultValue={"Rectangle"}
            onChange={(event) => {
              setRegion(event.target.value);
              setAnnotations([]);
            }}
          >
            <option value="Rectangle">Rectangle</option>
            <option value="Line">Line</option>
          </Select>
        </Flex>
        <Flex className="justify-end">
          <Checkbox>Crop ROI</Checkbox>
        </Flex>
      </Box>
      <Box className="w-[48%] h-[300px]">
        <Stage
          width={438}
          height={300}
          className="bg-slate-400"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <Layer>
            <Image
              image={image}
              ref={imageRef}
              x={0}
              y={0}
              width={438}
              height={300}
            />
            {annotationsToDraw.map((value) =>
              region === "Rectangle" ? (
                <Rect
                  x={value.x}
                  y={value.y}
                  width={value.width}
                  height={value.height}
                  stroke="red"
                  strokeWidth={2}
                />
              ) : (
                <Line
                  x={value.x}
                  y={value.y}
                  points={[0, 0, 0, 0, value.width, value.height]}
                  tension={0}
                  closed
                  stroke="red"
                  strokeWidth={2}
                />
              )
            )}
          </Layer>
        </Stage>
        <Flex className="flex-wrap justify-between gap-y-2 mt-5">
          <CustomBtn
            title="Get Live View"
            color="secondaryBtn"
            borderColor="#D7D7D7"
            textColor="#696969"
            height="35px"
            width="100px"
            isLoading={false}
          />
          <CustomBtn
            title="Fetch"
            color="secondaryBtn"
            borderColor="#D7D7D7"
            textColor="#696969"
            height="35px"
            width="100px"
            isLoading={false}
          />
          <CustomBtn
            title="Clear"
            color="secondaryBtn"
            borderColor="#D7D7D7"
            textColor="#696969"
            height="35px"
            width="100px"
            isLoading={false}
            onClick={() => {
              setAnnotations([]);
            }}
          />
          <CustomBtn
            title="Done"
            color="secondaryBtn"
            borderColor="#D7D7D7"
            textColor="#696969"
            height="35px"
            width="100px"
            isLoading={false}
            onClick={() => {
              if (region === "Rectangle")
                console.log("Coordinates", JSON.stringify(annotations));
              else {
                const temp = [
                  {
                    x: annotations[0].x,
                    y: annotations[0].y,
                    x2: annotations[0].x + annotations[0].width,
                    y2: annotations[0].y + annotations[0].height,
                    key: annotations[0].key,
                  },
                ];
                console.log("Line", JSON.stringify(temp));
              }
            }}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default SelectROI;

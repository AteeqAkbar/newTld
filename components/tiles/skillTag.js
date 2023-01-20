import React from "react";
import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { CUIAutoComplete } from "chakra-ui-autocomplete";

export default function SkillTag({ skills, handleSelectedChange, userSkills }) {
  const [pickerItems, setPickerItems] = React.useState(skills);
  const [selectedItems, setSelectedItems] = React.useState(
    userSkills ? userSkills : []
  );

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
      handleSelectedChange(selectedItems);
    }
  };

  console.log(selectedItems, "fffffffffffffffff");
  return (
    <ChakraProvider>
      <Box maxW="xl">
        <CUIAutoComplete
          // label="Select Skills"
          placeholder="Type a Skills"
          onCreateItem={handleCreateItem}
          items={pickerItems}
          tagStyleProps={{
            rounded: "full",
            bgColor: "#1C2D56",
            color: "white",
            pt: 1,
            pb: 2,
            px: 2,
            fontSize: "1rem",
          }}
          selectedItems={selectedItems}
          // Here selected skills comes as argument in changes and send to handleSelectedItmsChange

          onSelectedItemsChange={(changes) =>
            handleSelectedItemsChange(changes.selectedItems)
          }
        />
      </Box>
    </ChakraProvider>
  );
}

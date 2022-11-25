import React, { useState } from 'react'
// import Select from 'react-select';
import AsyncSelect from 'react-select/async';

// This is all the moke data (actual data will come from api's)


const options = [
  { value: 'red', label: 'Red', color:'#ff0000', bgColor : '#ffb9b9' },
  { value: 'blue', label: 'Blue', color:'#008cff', bgColor : '#aad9ff'  },
  { value: 'green', label: 'Green', color:'#62ff00', bgColor : '#cfffb0'  },
  { value: 'orange', label: 'Orange', color:'#ffbb00', bgColor : '#ffeaa3'  },
  { value: 'purple', label: 'Purple', color:'#9d00ff', bgColor : '#cfa3ff'  },
  { value: 'yellow', label: 'Yellow', color:'#fff700', bgColor : '#fffdbf'  },
  { value: 'Pink', label: 'Pink', color:'#fb00ff', bgColor : '#f1a3ff'  },
  { value: 'black', label: 'Black', color:'#000000', bgColor : '#535353'  },
]


const Anime3 = () => {

  const [item, setItem] = useState([])

  // console.log(item)

  const handleChange = (selectedObject) => {
    // console.log(selectedObject)
  }

  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: data.color, ":hover":{background : data.bgColor} };
    },

    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.bgColor,
        color: "#fff",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: data.color,
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    }
  }

  const loadOptions = (searchValue, callback)=>{
    // when we are fetching data from backend then we use this for optimal search
    setTimeout(()=>{
      const filteredItem = options.filter((item)=>{
         return item.label.toLowerCase().includes(searchValue.toLowerCase())
      })
      console.log(filteredItem)
      callback(filteredItem)
    },1000)
    //let say api call takes 2 second to fetch data
  } 
 
  
  return (
    <div className="anime3"> 
       <div className="asyncSelect">
       <AsyncSelect
          className="select_main"
          loadOptions={loadOptions}
          closeMenuOnSelect={false}
          defaultOptions
          isMulti
          onChange={handleChange}
          styles={colorStyles}
          // styles={colourStyles}
        />
       </div>
    </div>
  )
}

export default Anime3
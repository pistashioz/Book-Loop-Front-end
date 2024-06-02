<template>
    <label class = "relative">
        <input type = "checkbox" class = "hidden peer">
        <div class = "cursor-pointer after:content-['▼'] after:text-xs after:ml-1 after:inline-flex after:items-center peer-checked:after:-rotate-180 after:transition-transform ">
            Select Genres
        </div>
        <div class = "absolute bg-white border p-2 transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto">
            <ul>
                <li v-for="(option, index) in options" :key="index">
                <label class="flex whitespace-nowrap cursor-pointer px-2 py-1 transition-colors hover:bg-blue-100 [&:has(input:checked)]:bg-blue-200">
                    <input
                    type="checkbox"
                    :name="formFieldName"
                    :value="option"
                    v-model="selectedOptions"
                    class="cursor-pointer"
                    @change="handleChange"
                    />
                    <span class="ml-1">{{ option }}</span>
                </label>
                </li>
            </ul>
        </div> 
    </label>
</template>
<script>
export default {
  props: {
    formFieldName: String,
    options: Array
  },
  data() {
    return {
      selectedOptions: []
    };
  },
  methods: {
    handleChange(e) {
        const isChecked = e.target.checked;
      const option = e.target.value;
      console.log(option)
      const selectedOptionSet = new Set(this.selectedOptions);
      console.log('this selected options', selectedOptionSet)
      if (isChecked) {
        selectedOptionSet.add(option);
      } else {
        selectedOptionSet.delete(option);
      }

      this.selectedOptions = Array.from(selectedOptionSet);
      this.$emit('selectionChanged', this.selectedOptions);
    }
  }, // <-- Add a semicolon here
};/*
export default function MultiSelectDropdown({
  formFieldName,
  options,
  onChange,
}) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (e) => {
  const isChecked = e.target.checked;
  const option = e.target.value;

  const selectedOptionSet = new Set(selectedOptions);

  if (isChecked) {
    selectedOptionSet.add(option);
  } else {
    selectedOptionSet.delete(option);
  }

  const newSelectedOptions = Array.from(selectedOptionSet);

  setSelectedOptions(newSelectedOptions);
  onChange(newSelectedOptions);
};
}*/

</script>
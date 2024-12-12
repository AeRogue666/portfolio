const pushFilterContent = (array, filter) => {
    array.map((content,i) => {
        return filter.filter(category => category.filterTag == content.value).map(result => {
            return array[i].data.push({id: result.id, title: result.title})
        })
    });
    return array.map((content,i) => {if(content.data.length == 0) array.splice(i,1)});
};

// Executes logic after the submit have been send
let errors = reactive([]);
const submitFilterForm = () => {
    errors = reactive([])
    if(!selectedCategories) errors.push('Veuillez sélectionner une ou plusieurs catégories')
    else console.log('selectedCategories: ', selectedCategories), emits('submitFilter', selectedCategories)
};
const addSelectedCategories = (value) => {
    if(value) {
        let index = selectedCategories.indexOf(value);
        if(index > -1) selectedCategories.splice(index, 1);
        else selectedCategories.push(value);
    }
};
const resetSelection = () => {
    selectedCategories = reactive([])
};
const addCheckedValues = (array) => {
    if(selectedCategories.length !== 0) array.map((content,i) => {
        content.data.map(value => {
            if(value.id == selectedCategories[i] && !value.checked) {
                let index = content.data.indexOf(value);
                if(index > -1) content.data.splice(index, 1);
                return content.data.push({id: value.id, title: value.title, checked:'true'}), projectTagsList.push({id: value.id, title: value.title})
            }
        });
        return content.data.sort((a,b) => {return a.id - b.id});
    });
    return array
};
const tagToRemove = async(value) => {
    if(value && selectedCategories.includes(value)) {
        try {
            let index = selectedCategories.indexOf(value);
            if(index > -1) selectedCategories.splice(index, 1);
        } catch(error) {
            return [error, null]
        }
    }
};

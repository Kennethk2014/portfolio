<template>
    <div v-if="textarea === true" class="mb-3" :textarea="textarea">
        <label :for="formLabel" class="form-label">{{formLabel}}</label>
        <textarea v-bind="{
            ...$attrs,
            onChange: (event) => $emit('update:modelValue',
            event.target.value)}"
            :value="modelValue"
            class="form-control py-3" 
            :rows="rows" 
            :id="formLabel" 
            :placeholder="placeholder"
            required="true"
            ></textarea>
    </div>
    <div v-else class="mb-3" :textarea="textarea">
        <label :for="formLabel" class="form-label">{{formLabel}}</label>
        <input v-bind="{
            ...$attrs,
            onChange: (event) => $emit('update:modelValue',
            event.target.value)}"
            :value="modelValue" 
            :type="type" 
            class="form-control py-3" 
            :id="formLabel" 
            :placeholder="placeholder"
            required="true"
            >
    </div>

</template>


<script>
export default {
    props: {
        formLabel: String,
        type: String,
        placeholder: String,
        rows: String,
        textarea: Boolean,
        modelValue: String,
    },
}
</script>

<style scoped>

    label{
        color: #C53D3C;
        font-weight: 600;
    }
    input{
        background: rgba(255,255,255,0.1);
        border: none;
        color: rgba(255,255,255,0.87);
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
    textarea{
        background: rgba(255,255,255,0.1);
        border: none;
        color: rgba(255,255,255,0.87);
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
    
</style>



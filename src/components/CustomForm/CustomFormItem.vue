<template>
    <div v-if="textarea === true" class="mb-3" :textarea="textarea">
        <label :for="formLabel" class="form-label">{{formLabel}}</label>
        <textarea v-model="value" class="form-control py-3" :rows="rows" :id="formLabel" :placeholder="placeholder"></textarea>
    </div>
    <div v-else class="mb-3" :textarea="textarea">
        <label :for="formLabel" class="form-label">{{formLabel}}</label>
        <input v-model="value" :type="type" class="form-control py-3" :id="formLabel" :placeholder="placeholder">
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
        value: String,
    },
}
</script>

<style scoped>

    label{
        color: rgba(255,255,255,0.87);
        font-weight: 600;
    }
    input{
        background: rgba(255,255,255,0.1);
        border: none;
        color: rgba(255,255,255,0.87);
    }
    textarea{
        background: rgba(255,255,255,0.1);
        border: none;
        color: rgba(255,255,255,0.87);
    }
</style>



<template>
    <section class="content">
        <div class="row">
            <PromoteComp />
            <FormComp />
        </div>
    </section>
</template>
<script>
import PromoteComp from './content/PromoteComp.vue'
import FormComp from './content/FormComp.vue'

export default {
    name: 'Content',
    components: {
        PromoteComp,
        FormComp
    }
}
</script>


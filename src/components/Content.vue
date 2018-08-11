<template>
    <section class="content">
        <div class="container">
            <div class="row">
                <PromoteComp />
                <FormComp />
            </div>
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


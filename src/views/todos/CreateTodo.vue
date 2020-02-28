<template>
    <div class="ui centered card">
        <button class='ui basic blue button' v-show="!isCreating" v-on:click="openForm">
            Add new todo
        </button>
        <div class="content" v-show="isCreating">
            <div class="ui form">
                <div class="field">
                    <label>Title</label>
                    <input type="text" v-model="newTitle" />
                </div>
                <div class="field">
                    <label>Project</label>
                    <input type="text" v-model="newProject" />
                </div>
                <div class='ui two button attached buttons'>                
                    <button class='ui basic blue button' v-on:click="submitForm">
                        Save
                    </button>
                    <button class='ui basic red button' v-on:click="closeForm">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CreateTodo',
    data () {
        return {
            isCreating: false,
            newTitle: '',
            newProject: ''
        }
    },
    methods: {
        openForm () {
            this.isCreating = true
        },
        closeForm () {
            this.resetForm()
            this.isCreating = false
        },
        submitForm () {
            if (this.newTitle.length > 0 && this.newProject.length > 0) {
                const title = this.newTitle
                const project = this.newProject
                this.$store.dispatch("createTodo",{
                    title,
                    project,
                    done: false
                })
            }
            
            this.resetForm()
            this.isCreating = false
        },
        resetForm () {
            this.newTitle = ''
            this.newProject = ''
        }
    }
}
</script>
<style scoped>

</style>

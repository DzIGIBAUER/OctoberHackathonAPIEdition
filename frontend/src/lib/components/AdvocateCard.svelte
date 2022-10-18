<div class="container">

    <Card class="advocate-card">
        <a style="all: unset;" href="#advocate">
            <PrimaryAction>
                <Content class="flex-content">
                    <img class="profile-pic" src={advocate.profile_pic.toString()} alt={advocate.name} />
                    <p class="mdc-typography--subtitle1 name">{advocate.name}</p>
                </Content>
            </PrimaryAction>
        </a>
    </Card>
</div>


<script lang="ts">
    import type IAdvocate from '$lib/shared/interfaces/Advocate';

    export let advocate: IAdvocate;

    import Card, { PrimaryAction, Content } from '@smui/card';
</script>


<style lang="scss">

    :global(.advocate-card) {
        

        :global(.flex-content) {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .name {
            white-space: nowrap;
        }

        .profile-pic {
            width: 50px;
            height: fit-content;
            border-radius: 50%;
            padding: 5px;
        }
    }

</style>

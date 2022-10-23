<div class="container">

    <Card class="advocate-card">
        <Content class="flex-content">
            <img class="profile-pic" src={advocate.profile_pic.toString()} alt={advocate.name} />
            <div style="display: block;">
                <p class="mdc-typography--subtitle1 name" style="margin-bottom: 0;">{advocate.name}</p>
                {#if advocate.twitter}
                    <a class="mdc-typography--body2 name" rel="noreferrer" target="_blank" href={advocate.twitter.toString()}>@{advocate.username}</a>
                {/if}
            </div>
        </Content>

        <a style="all: unset;" href={`advocates/${advocate.username}`}>
            <PrimaryAction>
                <p style="text-align: center;" class="mdc-typography--button" >See more...</p>
            </PrimaryAction>
        </a>
    </Card>

</div>


<script lang="ts">
    import type IAdvocate from '$lib/shared/interfaces/Advocate';
    
    import Card, { PrimaryAction, Content } from '@smui/card';

    export let advocate: IAdvocate;

</script>


<style lang="scss">

    :global(.advocate-card) {
        overflow: hidden;
        
        :global(.flex-content) {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 50px;
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

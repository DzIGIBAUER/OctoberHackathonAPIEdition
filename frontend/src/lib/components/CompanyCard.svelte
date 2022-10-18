<div class="container">
    
    <div class="company-details">
        <img class="logo" src={company.logo.toString()} alt={company.name} />
        <h2 class="mdc-typography--headline2 name">{company.name}</h2>

        <p class="mdc-typography--body1 bio">{company.bio}</p>
        
        <div class="advocates-preview">
            {#each company.advocates.slice(0, 5) as data}
                <Wrapper>
                    <img src={data.profile_pic.toString()} alt={data.name} />
                    <Tooltip showDelay={1} hideDelay={0} xPos="start" yPos="above" >{data.name}</Tooltip>
                </Wrapper>
            {/each}
        </div>
    </div>

</div>

<script lang="ts">
    import type ICompany from "$lib/shared/interfaces/Company";

    import Tooltip, { Wrapper } from '@smui/tooltip';

    export let company: ICompany;

</script>

<style lang="scss">

    .company-details {
        display: flex;
        flex-direction: column;
        padding: 15px;

        .logo {
            width: 100px;
            margin: auto;
            border-radius: 50%;
        }

        .name {
            margin: 0 auto;
            text-align: center;
        }

        .bio {
            white-space: pre-wrap;
            text-align: center;
        }

        .advocates-preview {
            width: 50%;
            display: flex;
            flex-direction: row;
            
            img {
                width: 50px;
                border-radius: 50%;
                height: fit-content;
            }

            img:not(:first-child) {
                margin-left: -5%;
            }
        }

    }


</style>
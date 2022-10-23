
<main class="container">
    <Button variant="raised" href="/advocates">
        <Icon class="material-icons">arrow_back</Icon>
        <Label>List of advocates</Label>
    </Button>
    <article>
        <LayoutGrid>
            <Cell spanDevices={{desktop: 3, tablet: 12}}>
                <div class="img-container">
                    <img src={data.profile_pic.toString()} alt={data.name} />
                </div>
            </Cell>
            <Cell spanDevices={{desktop: 9, tablet: 12}}>
                <div>
                    <h1 class="mdc-typography--headline2 advocate-name">{data.name}</h1>
                    <div class="twitter-info">
                        
                        <a
                            href={data.twitter.toString()}
                            target="_blank"
                            rel="noreferrer"
                            class="mdc-typography--body1"
                        >
                            @{data.username}
                        </a>

                        <p class="mdc-typography--body1">Followers: {data.follower_count}</p>

                    </div>
                    <p class="mdc-typography--body1">{data.bio}</p>
                </div>
            </Cell>
        </LayoutGrid>
    </article>
</main>


<script lang="ts">
    import type { PageData } from "./$types";

    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import Button, { Label, Icon } from "@smui/button";

    export let data: PageData;

</script>



<style lang="scss">

    .container {
        margin: 15px;

        article {
            background-color: var(--mdc-theme-surface);
        }
    }

    .img-container {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    
        img {
            width: 50%;
            border-radius: 50%;
        }
    }


    .advocate-name {
        margin-bottom: 0;
    }

    .twitter-info {
        display: flex;

        * {
            margin: 0 5px;
        }
    }

</style>
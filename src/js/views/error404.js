const Error404 = {
    render: async () => {
        const view = `
            <section class="section error404">
                <h1>404 Error</h1>
            </section>
        `;
        return view;
    },
    after_render: async () => {},
};

export default Error404;

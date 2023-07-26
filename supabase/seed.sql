INSERT INTO auth.users
VALUES (
        '00000000-0000-0000-0000-000000000000',
        '45c61ce0-6971-4bb9-884a-cdf6f8439716',
        'authenticated',
        'authenticated',
        'eggleg@gmail.com',
        '$2a$10$Cb9GQ2g5bzdjbNfADg96D.1PbVYIXr2fOmMQfzA/Ytxud4ArypkVG',
        '2023-05-02 04:08:19.706059+00',
        NULL,
        '',
        NULL,
        '',
        NULL,
        '',
        '',
        NULL,
        '2023-05-20 16:29:00.512415+00',
        '{"provider": "email", "providers": ["email"]}',
        '{}',
        NULL,
        '2023-05-02 04:08:19.698571+00',
        '2023-05-20 19:33:31.586576+00',
        NULL,
        NULL,
        '',
        '',
        NULL,
        DEFAULT,
        '',
        0,
        NULL,
        '',
        NULL,
        false,
        NULL
    );
INSERT INTO auth.identities
VALUES (
        '45c61ce0-6971-4bb9-884a-cdf6f8439716',
        '45c61ce0-6971-4bb9-884a-cdf6f8439716',
        '{"sub": "45c61ce0-6971-4bb9-884a-cdf6f8439716", "email": "eggleg@gmail.com"}',
        'email',
        '2023-05-02 04:08:19.702806+00',
        '2023-05-02 04:08:19.702854+00',
        '2023-05-02 04:08:19.702854+00',
        DEFAULT
    );
INSERT INTO public.user_roles
VALUES ('45c61ce0-6971-4bb9-884a-cdf6f8439716', 'admin');
-- INSERT INTO public.profiles
-- VALUES (
--         '45c61ce0-6971-4bb9-884a-cdf6f8439716',
--         '2023-06-14 02:23:05.911807+00',
--         'eggleg',
--         null,
--         'https://ahihbpdewjvyhhbglaym.supabase.co/storage/v1/object/sign/avatars/egg.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2VnZy5qcGVnIiwiaWF0IjoxNjg2NzEzMjA5LCJleHAiOjE3MTgyNDkyMDl9.hsDeXneG8ZpCC-0gqfTr2MsLcRSkaZfcMBAQlziVG1o&t=2023-06-14T03%3A26%3A49.514Z',
--         null
--     );
INSERT INTO public.reviews
VALUES (
        3,
        '2023-06-14 03:01:24.933403+00',
        '45c61ce0-6971-4bb9-884a-cdf6f8439716',
        'egg store',
        'horrible diet code i cry',
        1
    );
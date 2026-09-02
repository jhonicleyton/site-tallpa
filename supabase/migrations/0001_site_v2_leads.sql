-- Site v2: ajustes na tabela de leads.
-- Aplicar no SQL Editor do Supabase antes de publicar.
-- Os dois comandos são idempotentes: rodar de novo não causa erro.

-- 1. Assunto escolhido pelo visitante no primeiro passo do formulário.
--    Enquanto não existir, o código regrava sem o campo e o interesse
--    segue chegando no e-mail. Nada quebra, mas o dado não fica no banco.
alter table public.leads
  add column if not exists interest text;

-- 2. E-mail deixou de ser obrigatório.
--    O formulário antigo exigia e-mail. O novo aceita e-mail OU WhatsApp,
--    e grava email = null quando a pessoa informa só o telefone.
--    Se a coluna for NOT NULL, todo lead que vier só por WhatsApp falha
--    no insert e existe apenas no e-mail de notificação.
alter table public.leads
  alter column email drop not null;

-- Opcional: garantir no banco a mesma regra que a Server Action já aplica
-- (pelo menos um canal de contato). NOT VALID não checa as linhas antigas.
--
-- alter table public.leads
--   add constraint leads_contato_presente
--   check (email is not null or phone is not null) not valid;

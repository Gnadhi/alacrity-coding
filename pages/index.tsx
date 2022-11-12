import Account from '@/ui/Account';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';

const IndexPage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="px-14">
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <Account session={session} />
      )}
    </div>
  );
};

export default IndexPage;

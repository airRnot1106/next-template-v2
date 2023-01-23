import React, { useState } from 'react';

import { UserButton } from '@/components/domain/user/atoms/UserButton';

import { useUser } from '@/hooks/useUser';

import { hoge } from '@/libs/hoge';

import { User } from '@/utils/user';

export const ArticleSection = () => {
  const [user, setUser] = useUser();

  const [users, setUsers] = useState<User[]>([]);

  const users = [new User('Fuga'), new User('Piyo')];

  const fuga = hoge();
  // no

  console.log('aa' === 'aa');

  const piyo = (_e: string) => {};

  return (
    <section>
      <h2>Article Section</h2>
      <p>user: {user}</p>
      <UserButton onClick={() => setUser('Hoge')} />
    </section>
  );
};

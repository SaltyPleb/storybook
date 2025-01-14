import React, { FunctionComponent } from 'react';
import { Subheading } from './Subheading';
import { DocsStoryProps } from './types';
import { Anchor } from './Anchor';
import { Description } from './Description';
import { Story } from './Story';
import { Canvas } from './Canvas';

export const DocsStory: FunctionComponent<DocsStoryProps> = ({
  id,
  name,
  expanded = true,
  withToolbar = false,
  parameters,
}) => (
  <Anchor storyId={id}>
    {expanded && <Subheading>{name}</Subheading>}
    {expanded && parameters && parameters.docs && parameters.docs.storyDescription && (
      <Description markdown={parameters.docs.storyDescription} />
    )}
    <Canvas withToolbar={withToolbar}>
      <Story id={id} />
    </Canvas>
  </Anchor>
);

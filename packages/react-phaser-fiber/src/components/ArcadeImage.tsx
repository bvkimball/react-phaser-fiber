import * as Phaser from 'phaser'
import GameObject, { GameObjectProps } from './GameObject'
import { useScene } from '../hooks/useScene'
import React, { useImperativeHandle, useMemo } from 'react'
import {
  AlphaProps,
  BlendModeProps,
  ComputedSizeProps,
  DepthProps,
  FlipProps,
  MaskProps,
  OriginProps,
  PipelineProps,
  ScrollFactorProps,
  TintProps,
  TransformProps,
  VisibleProps,
  AccelerationProps,
  AngularProps,
  BounceProps,
  DebugProps,
  EnableProps,
  DragProps,
  FrictionProps,
  GravityProps,
  ImmovableProps,
  MassProps,
  SizeProps,
  VelocityProps,
} from '../reconciler'

export interface ArcadeImageProps
  extends Omit<
      GameObjectProps<Phaser.Physics.Arcade.Image>,
      'ref' | 'instance' | 'physics'
    >,
    AlphaProps,
    BlendModeProps,
    ComputedSizeProps,
    DepthProps,
    FlipProps,
    MaskProps,
    OriginProps,
    PipelineProps,
    ScrollFactorProps,
    TintProps,
    TransformProps,
    VisibleProps,
    AccelerationProps,
    AngularProps,
    BounceProps,
    DebugProps,
    EnableProps,
    DragProps,
    FrictionProps,
    GravityProps,
    ImmovableProps,
    MassProps,
    SizeProps,
    VelocityProps {
  instance?: Phaser.Physics.Arcade.Image
  texture?: string
  frame?: string | number
}

function ArcadeImage(
  props: ArcadeImageProps,
  ref: React.Ref<Phaser.Physics.Arcade.Image>
) {
  const scene = useScene()
  const instance = useMemo(
    () =>
      props.instance ||
      new Phaser.Physics.Arcade.Image(
        scene,
        props.x,
        props.y,
        props.texture,
        props.frame
      ),
    []
  )

  useImperativeHandle(ref, () => instance)

  return <GameObject instance={instance} physics="arcade" {...props} />
}

export default React.forwardRef(ArcadeImage)
